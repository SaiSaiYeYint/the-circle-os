import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { database, asAccount, A, B } from './helpers/writing-cloud.mjs';
let db;
before(async () => {
 db = await database();
 await db.exec(`create schema storage; create table storage.buckets(id text,name text,public boolean,file_size_limit bigint,allowed_mime_types text[]); create table storage.objects(bucket_id text); alter table storage.objects enable row level security;`);
 await db.exec(await readFile(new URL('../supabase/migrations/202611110001_content_admin.sql',import.meta.url),'utf8'));
 await db.exec(await readFile(new URL('../supabase/migrations/202611110002_content_admin_operations.sql',import.meta.url),'utf8'));
 await db.query('insert into public.circle_content_admins values($1)',[A]);
});
after(async () => { await db?.close(); });
const save = (who,draft,revision,operation) => asAccount(db,who,async tx => (await tx.query('select public.circle_save_content_draft($1,$2,$3) as result',[draft,revision,operation])).rows[0].result);
test('only the granted account can save; drafts and role grants stay private',async () => {
 const draft={draftId:'test-one',chapter:{title:'Synthetic'}};
 await assert.rejects(save(B,draft,0,crypto.randomUUID()),/Admin required/);
 await assert.rejects(save(null,draft,0,crypto.randomUUID()),/Admin required/);
 assert.equal((await save(A,draft,0,crypto.randomUUID())).revision,1);
 assert.deepEqual(await asAccount(db,B,async tx => (await tx.query('select * from public.circle_content_drafts')).rows),[]);
 await assert.rejects(asAccount(db,B,tx => tx.exec(`insert into public.circle_content_admins values('${B}')`)),/permission denied/);
});
test('lost-response retries return the same receipt; competing edits cannot overwrite',async () => {
 const id=crypto.randomUUID(), draft={draftId:'retry',chapter:{title:'Original'}};
 const result=await save(A,draft,0,id);
 assert.deepEqual(await save(A,draft,0,id),result);
 await assert.rejects(save(A,{...draft,chapter:{title:'Changed'}},0,id),/Operation reused/);
 await assert.rejects(save(A,{...draft,chapter:{title:'Competing'}},0,crypto.randomUUID()),/Draft changed/);
 assert.equal((await save(A,{...draft,chapter:{title:'Accepted'}},1,crypto.randomUUID())).revision,2);
});
test('published versions cannot be mutated by an admin and media cannot be replaced',async () => {
 for(const query of ["insert into public.circle_content_versions values('x',1,'{}',now())","delete from public.circle_content_assets","update public.circle_content_versions set content='{}'"]) await assert.rejects(asAccount(db,A,tx => tx.exec(query)),/permission denied/);
});
test('removing the grant denies the next request',async () => {
 await db.query('delete from public.circle_content_admins where account_id=$1',[A]);
 await assert.rejects(save(A,{draftId:'revoked'},0,crypto.randomUUID()),/Admin required/);
 await db.query('insert into public.circle_content_admins values($1)',[A]);
});
test('trusted operations can bootstrap and revoke grants without publishing or changing content',async()=>{
 await asAccount(db,null,tx=>tx.query('insert into public.circle_content_admins values($1)',[B]),'service_role');
 assert.equal(await asAccount(db,B,async tx=>(await tx.query('select public.circle_content_admin() as allowed')).rows[0].allowed),true);
 await asAccount(db,null,tx=>tx.query('delete from public.circle_content_admins where account_id=$1',[B]),'service_role');
 for(const query of ["update public.circle_content_drafts set revision=99", "insert into public.circle_content_versions values('forged',1,'{}',now())"])
  await assert.rejects(asAccount(db,null,tx=>tx.exec(query),'service_role'),/permission denied/);
});
