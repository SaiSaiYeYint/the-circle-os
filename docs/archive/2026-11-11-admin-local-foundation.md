# Session handoff

## Account Content Admin foundation — 2026-11-11

**Approval/Git.** Developer approved the concrete first implementation proposal
in chat: repository account Admin, shared drafts/recovery, catalog/media,
Quotes, tests and continuity records. Hosted setup, publication, deployment and
personal migration remain unapproved. Started main/9f2425f with a clean tree.
No staging, commit or push. The prior [planning snapshot](2026-11-11-admin-planning.md)
is preserved.

**Prepared behavior.** Account Admin verifies the current Supabase user and
protected database role on each request. The account-menu entry checks permission;
the old password cannot unlock account mode. Shared chapter drafts use revision
checks and exact retry receipts. Account/tab-local recovery retains unsent text
and failed saves; stale writes fail rather than overwrite. Published edits
prepare a new version. Account catalog publication/run-reset/door actions are
blocked. Legacy browser drafts are not imported. Quotes retain public reading
and use account permissions for account-mode administration.

Media has private immutable UUID objects, JPEG/PNG/WebP signature/size checks,
alternative text, signed previews and stable references. Uncertain upload retries
compare stored bytes before accepting metadata. The migration prepares drafts,
versions/assets, role grants, receipts and Storage policies; it remains unapplied.
Content image placement, articles/templates, publication/withdrawal, published
reading policies, cleanup and Explore remain follow-ups. See
[setup and limits](../CONTENT_ADMIN_SETUP.md).

**Checks/gaps.** Local SQL/route/Quotes/access checks pass, including permission
denial, role removal, retry receipts, competing revisions and mutation denial.
Mobile/desktop isolated browser checks pass for save, failed-save title recovery
after reload and Media entry. Next and Vinext production builds passed before
final interface refinements; final commands/results belong in the journey record.
The initial browser harness had a JSX transform error; corrected. Sandboxed
Chromium networking and Turbopack worker startup failed; approved external runs
passed. The shell Node launcher failed; bundled Node with its directory first
on PATH works. Two pre-existing CSS-only Chapter typography assertions fail;
the stylesheet is unchanged. No full-suite pass is claimed. Hosted Storage,
session revocation, real lock contention, backup/restore and physical-device
acceptance remain pending. Existing writing/device/ResizeObserver gaps remain;
writing activation stays off.

**Invariants/records.** No shared App Box geometry/type, personal stores, 06:00
day, chapter answers or authored readings changed. No new cross-tool geometry
measurement is claimed; this slice changes the Admin interface. Immutability
is checked through SQL denial and new-version behavior. Owning plan, architecture,
Page access standard, Quote instructions and setup record distinguish prepared
source from unapplied hosted configuration. No measured performance problem
justified a separate optimization.

**Next.** Local focused checks are complete. Review concrete hosted project/role,
bootstrap/recovery, backup and policy-check scope before any remote action.

**Continuation.** Account-switch review fixed a late-decoded draft response that
could select the next account's cache. The editor/recovery now retain the mount's
owner scope and recheck after decoding/replay; stale recovery writes do nothing.
All three isolated Admin browser cases pass, including the new paused-body
switch regression; the 17 focused tests, types and focused lint pass again.
Read-only hosted queries found all five Admin tables absent. The developer
provided two target Admin addresses: one existing verified account, one not yet
created. Keep account identifiers and credentials out of committed documents.
Prepare the hosted proposal to apply the migration, grant the existing account,
invite/grant the second, and verify with synthetic records/accounts before
cleanup. No hosted change is authorized yet; no SQL-console connection exists.
