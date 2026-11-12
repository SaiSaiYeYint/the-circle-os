-- Follow-up to the already applied foundation; do not reapply that migration.
begin;
-- Trusted bootstrap/revocation only; browser requests use the caller's token.
grant select, insert, delete on public.circle_content_admins to service_role;
-- Operator inspection and exact fixture cleanup, with no publication/update.
grant select, delete on public.circle_content_drafts, public.circle_content_receipts,
  public.circle_content_versions, public.circle_content_assets to service_role;
commit;
