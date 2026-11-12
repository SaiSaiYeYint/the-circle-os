-- Additive preparation. Apply only after separate hosted approval.
begin;
create table public.circle_content_items (
 id text primary key, kind text not null check(kind in ('chapter','article')),
 draft_id text not null references public.circle_content_drafts(id),
 current_version integer not null, withdrawn boolean not null default false,
 revision integer not null default 1
);
create table public.circle_content_version_assets (
 id text not null, version integer not null, asset_id uuid not null references public.circle_content_assets(id),
 primary key(id,version,asset_id), foreign key(id,version) references public.circle_content_versions(id,version)
);
alter table public.circle_content_items enable row level security;
alter table public.circle_content_version_assets enable row level security;
revoke all on public.circle_content_items, public.circle_content_version_assets from public,anon,authenticated;
grant select,delete on public.circle_content_items, public.circle_content_version_assets to service_role;
create function public.circle_content_reader() returns boolean language sql stable security definer set search_path='' as $$
 select exists(select 1 from auth.users where id=auth.uid() and email_confirmed_at is not null)
$$;
revoke all on function public.circle_content_reader() from public,anon;
grant execute on function public.circle_content_reader() to authenticated;
create function public.circle_catalog_read(item text default null, edition integer default null) returns jsonb language plpgsql stable security definer set search_path='' as $$
begin
 if not public.circle_content_reader() then raise exception 'Sign in required'; end if;
 if item is null then
  return coalesce((select jsonb_agg(jsonb_build_object('id',i.id,'kind',i.kind,'version',i.current_version,'revision',i.revision,'withdrawn',i.withdrawn,'title',coalesce(v.content->'article'->>'title',v.content->'chapter'->>'title'))) from public.circle_content_items i join public.circle_content_versions v on v.id=i.id and v.version=i.current_version where not i.withdrawn or public.circle_content_admin()),'[]');
 end if;
 return (select jsonb_build_object('id',v.id,'version',v.version,'content',v.content,'publishedAt',v.published_at) from public.circle_content_versions v where v.id=item and v.version=edition);
end $$;
revoke all on function public.circle_catalog_read(text,integer) from public,anon;
grant execute on function public.circle_catalog_read(text,integer) to authenticated;
create function public.circle_catalog_change(command jsonb) returns jsonb language plpgsql security definer set search_path='' as $$
declare d public.circle_content_drafts; i public.circle_content_items; prior public.circle_content_receipts;
 item text:=command->>'id'; action text:=command->>'action'; op uuid:=(command->>'operationId')::uuid;
 n integer; content jsonb; result jsonb; image jsonb; asset uuid;
begin
 if not public.circle_content_admin() then raise exception 'Admin required'; end if;
 if item is null or length(item) not between 1 and 200 or op is null then raise exception 'Invalid operation'; end if;
 perform pg_advisory_xact_lock(hashtextextended('catalog:'||item,0));
 select * into prior from public.circle_content_receipts where operation_id=op;
 if found then
  if prior.payload<>command then raise exception 'Operation reused'; end if;
  return prior.result;
 end if;
 select * into i from public.circle_content_items where id=item for update;
 if coalesce(i.revision,0) is distinct from (command->>'expectedRevision')::integer then raise exception 'Catalog changed'; end if;
 if action='publish' then
  select * into d from public.circle_content_drafts where id=command->>'draftId' for update;
  if d.id is null or d.revision is distinct from (command->>'draftRevision')::integer or d.draft is distinct from command->'draft' then raise exception 'Draft changed'; end if;
  if i.id is not null and i.draft_id<>d.id then raise exception 'Different source draft'; end if;
  n:=coalesce(i.current_version,0)+1;
  if d.draft ? 'article' then
   if item<>d.id or coalesce(length(trim(d.draft->'article'->>'title')),0)=0 or jsonb_typeof(d.draft->'article'->'blocks') is distinct from 'array' then raise exception 'Invalid article'; end if;
   if exists(select 1 from jsonb_array_elements(d.draft->'article'->'blocks') b where coalesce(b->>'type','') not in ('heading','paragraph','image') or (b->>'type' in ('heading','paragraph') and coalesce(length(trim(b->>'text')),0)=0) or (b->>'type'='image' and not (b ? 'image'))) then raise exception 'Invalid article block'; end if;
   content:=jsonb_build_object('kind','article','article',d.draft->'article');
  else
   if item<>d.draft->'chapter'->>'id' or jsonb_array_length(d.draft->'chapter'->'pages')<2 then raise exception 'Invalid chapter'; end if;
   content:=jsonb_build_object('kind','chapter','chapter',jsonb_set(d.draft->'chapter','{version}',to_jsonb(n)));
  end if;
  insert into public.circle_content_versions(id,version,content) values(item,n,content);
  for image in select jsonb_path_query(content,'$.** ? (exists (@.assetId))') loop
   asset:=(image->>'assetId')::uuid;
   if coalesce(length(trim(image->>'alt')),0)=0 or not exists(select 1 from public.circle_content_assets where id=asset) or not exists(select 1 from storage.objects where bucket_id='circle-content' and name=asset::text) then raise exception 'Image unavailable'; end if;
   insert into public.circle_content_version_assets values(item,n,asset) on conflict do nothing;
  end loop;
  insert into public.circle_content_items(id,kind,draft_id,current_version) values(item,content->>'kind',d.id,n)
   on conflict(id) do update set current_version=n,revision=circle_content_items.revision+1;
 elsif action in ('withdraw','restore') and i.id is not null then
  update public.circle_content_items set withdrawn=(action='withdraw'),revision=revision+1 where id=item;
 else raise exception 'Invalid action'; end if;
 result:=jsonb_build_object('id',item,'version',coalesce(n,i.current_version),'revision',coalesce(i.revision,0)+1);
 insert into public.circle_content_receipts values(op,command,result);
 return result;
end $$;
revoke all on function public.circle_catalog_change(jsonb) from public,anon;
grant execute on function public.circle_catalog_change(jsonb) to authenticated;
create policy reader_published_assets on storage.objects for select to authenticated using (
 bucket_id='circle-content' and public.circle_content_reader() and exists(select 1 from public.circle_content_version_assets r where r.asset_id::text=name)
);
-- The policy helper must see references without exposing the reference table.
create function public.circle_content_asset_published(asset text) returns boolean language sql stable security definer set search_path='' as $$
 select public.circle_content_reader() and exists(select 1 from public.circle_content_version_assets where asset_id::text=asset)
$$;
revoke all on function public.circle_content_asset_published(text) from public,anon;
grant execute on function public.circle_content_asset_published(text) to authenticated;
drop policy reader_published_assets on storage.objects;
create policy reader_published_assets on storage.objects for select to authenticated using(bucket_id='circle-content' and public.circle_content_asset_published(name));
commit;
