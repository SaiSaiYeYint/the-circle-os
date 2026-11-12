-- Repository preparation only. Apply once after hosted setup approval.
begin;
create table public.circle_content_admins (account_id uuid primary key references auth.users(id));
alter table public.circle_content_admins enable row level security;
revoke all on public.circle_content_admins from public, anon, authenticated;
create function public.circle_content_admin() returns boolean language sql stable security definer set search_path = '' as $$
 select exists(select 1 from public.circle_content_admins a join auth.users u on u.id=a.account_id where a.account_id=auth.uid() and u.email_confirmed_at is not null)
$$;
revoke all on function public.circle_content_admin() from public, anon;
grant execute on function public.circle_content_admin() to authenticated;
create table public.circle_content_drafts (id text primary key, draft jsonb not null, revision integer not null, updated_at timestamptz not null default now());
create table public.circle_content_receipts (operation_id uuid primary key, payload jsonb not null, result jsonb not null);
create table public.circle_content_versions (id text not null, version integer not null check(version>0), content jsonb not null, published_at timestamptz not null default now(), primary key(id,version));
create table public.circle_content_assets (id uuid primary key, alt text not null check(length(alt) between 1 and 1000), mime text not null check(mime in ('image/jpeg','image/png','image/webp')), bytes integer not null check(bytes between 1 and 5242880), created_at timestamptz not null default now());
alter table public.circle_content_drafts enable row level security;
alter table public.circle_content_receipts enable row level security;
alter table public.circle_content_versions enable row level security;
alter table public.circle_content_assets enable row level security;
revoke all on public.circle_content_drafts, public.circle_content_receipts, public.circle_content_versions, public.circle_content_assets from public, anon, authenticated;
grant select on public.circle_content_drafts, public.circle_content_versions, public.circle_content_assets to authenticated;
grant insert on public.circle_content_assets to authenticated;
create policy admin_drafts on public.circle_content_drafts for select to authenticated using(public.circle_content_admin());
create policy admin_versions on public.circle_content_versions for select to authenticated using(public.circle_content_admin());
create policy admin_assets on public.circle_content_assets for select to authenticated using(public.circle_content_admin());
create policy admin_upload_metadata on public.circle_content_assets for insert to authenticated with check(public.circle_content_admin());
create function public.circle_save_content_draft(draft jsonb, expected_revision integer, operation_id uuid) returns jsonb language plpgsql security definer set search_path='' as $$
declare current_revision integer; accepted jsonb; previous public.circle_content_receipts; payload jsonb := jsonb_build_object('draft',draft,'revision',expected_revision);
begin
 if not public.circle_content_admin() then raise exception 'Admin required'; end if;
 if length(draft::text)>500000 or coalesce(length(draft->>'draftId'),0) not between 1 and 200 or expected_revision<0 then raise exception 'Invalid draft'; end if;
 perform pg_advisory_xact_lock(hashtextextended(draft->>'draftId',0));
 select * into previous from public.circle_content_receipts r where r.operation_id=circle_save_content_draft.operation_id;
 if found then
   if previous.payload<>payload then raise exception 'Operation reused'; end if;
   return previous.result;
 end if;
 select d.revision into current_revision from public.circle_content_drafts d where d.id=circle_save_content_draft.draft->>'draftId';
 if coalesce(current_revision,0)<>expected_revision then raise exception 'Draft changed'; end if;
 accepted := jsonb_build_object('revision',expected_revision+1);
 insert into public.circle_content_drafts values(draft->>'draftId',circle_save_content_draft.draft,expected_revision+1,now()) on conflict(id) do update set draft=excluded.draft, revision=excluded.revision, updated_at=excluded.updated_at;
 insert into public.circle_content_receipts values(operation_id,payload,accepted);
 return accepted;
end $$;
revoke all on function public.circle_save_content_draft(jsonb,integer,uuid) from public, anon;
grant execute on function public.circle_save_content_draft(jsonb,integer,uuid) to authenticated;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('circle-content','circle-content',false,5242880,array['image/jpeg','image/png','image/webp']);
create policy content_admin_upload on storage.objects for insert to authenticated with check(bucket_id='circle-content' and public.circle_content_admin());
create policy content_admin_read on storage.objects for select to authenticated using(bucket_id='circle-content' and public.circle_content_admin());
-- No update/delete policies: published bytes and versions cannot be replaced.
commit;
