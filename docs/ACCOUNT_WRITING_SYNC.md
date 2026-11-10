# Account writing storage and transport

Updated: 2026-11-11, Asia/Bangkok. This is the implemented account-writing
protocol and its verification boundary. Automatic product activation remains off.
Other lifestyle domains and legacy profile-server records are outside this contract.

## Current status

Both migrations were applied to the hosted project on 2026-11-06 after approval:

- [Original writing migration](../supabase/migrations/202611050001_account_writing.sql).
- [Resolution migration](../supabase/migrations/202611060001_writing_resolution.sql).

Do not reapply either non-idempotent migration. Bounded hosted two-account
RPC/access/conflict checks and separate synthetic IndexedDB reload checks passed
as recorded below. They do not certify the production writing adapter, cold
restart, offline page load, physical device, eviction or backups.

The resolution migration SHA-256 is
60b823dcc45f8ca5ff3623913272501e8dba6886178111600e4c410ec6e929e2.
The dated [pre-cleanup contract](archive/2026-11-11-doc-cleanup/ACCOUNT_WRITING_SYNC.md)
preserves implementation history and exact attempts.

## Writing status and conflict resolution - 2026-11-06

History conditionally shows Sync for pending saved work, conflicts or recoverable
errors, not drafts/completed sync alone. Retry is error-only and hides during
recovery. Note autosave and the global header remain silent.

Comparison shows Cloud/Device authored content. Tap a copy for dated read-only
history; stacked Use Cloud/Use Device actions choose a current copy.
Success returns silently to the list. Saved copies on the owning History row
retains original branch histories and This note with its current saved history,
independent of whether Sync is visible. New Note creates a separate entry.

A choice commits locally before upload and survives failure/response loss.
If either reviewed copy changes, review again. Both original saved histories
remain in immutable resolution records; the chosen current revision appends
to the existing cloud history. No prose merge or device-clock winner.
New local typing remains pending; clean buffers adopt the chosen version on
leaving Sync. Permanent deletion scrubs choice/archive bodies and cannot be undone
by an old resolution retry. Drafts never enter the cloud protocol.

All these views follow current full-page Design/Page rules. Older compact
Body-scroll descriptions are retired.

## Database contract

Private circle_private tables are writing_heads, writing_receipts,
writing_conflicts and writing_resolutions. Heads hold saved entries/versions or
terminal deletion markers; receipts retain body-free operation identity/hash,
generation, exact acceptance and server version. Conflicts retain competing
snapshots; resolutions preserve both histories and the chosen result until
terminal deletion scrubs their bodies.

Owner-only SELECT policies apply. Direct client mutations are denied.
Public RPCs derive auth.uid(), accept no owner argument, require authenticated
confirmed accounts, fixed empty search paths and qualified names.
Anonymous/service-role function calls are denied. This adds no privileged
admin-writing reader.

| RPC | Contract |
| --- | --- |
| circle_writing_inventory | Entry-ID paging, maximum 100 heads; client requests 50 |
| circle_writing_receipts | Only caller's named receipts, maximum 1,000 IDs |
| circle_writing_apply | Account transaction lock; validate snapshot/retry/base version; commit head and exact receipts atomically |
| circle_writing_resolve | Same account lock, exact reviewed cloud version/snapshot, stable request hash; preserve histories and append chosen revision |
| circle_writing_resolution_history | Paged same-owner archive recovery |

Changed retry identity is rejected. Published saved versions/source identity
cannot be rewritten. A competing base preserves a conflict without altering the
accepted head. Resolution choice settles exact captured operations without
inventing normal upload receipts; newer edits stay pending.

Permanent deletion is terminal per entry ID and takes precedence over stale edits.
Local/downloaded deletion removes saved bodies, drafts and choice/archive text,
using body-free suppression for pending work. Server deletion scrubs conflict and
resolution request/result bodies. Previously accepted apply retries return their
original body-free receipts; a prior resolution retry returns deleted. Neither
can resurrect the terminal head.

## Local and transport contract

records, sync-v1 and cloud-v1 share the account writing IndexedDB transaction
engine. Optional choices/resolved/body-free settled maps preserve cloud-v1
compatibility. Local ledger, queue, receipt and deletion operations are atomic.

Recover pending choices first, then exact normal receipts, remote inventory,
uncovered saved-entry inventory and uploads. Deterministic inventory markers
cover earlier account writing without replaying draft receipts. Compatibility
or legacy records are never silently imported. Cloud baselines contain lifecycle/
version identity, not prose; remote conflict copies contain saved text, not drafts.

Uploads include a current saved snapshot and ordered exact operation references.
Stable request IDs/hashes protect response-loss retry. Acknowledgements retire
only named operations and preserve newer writing.

Each request captures a current session token, verifies its confirmed user through
Auth against the local scope and sends that same token. POST/no-store/rejected
redirects, 15-second timeout and account abort guard apply. Late checks/replies/
parsed data cannot update a closed account. Offline proof is not authorization;
backend error bodies are not shown/logged by this transport.

The runner requires NEXT_PUBLIC_CIRCLE_WRITING_SYNC=enabled and a valid connection;
default is off. If enabled, it checks entry/local notification/reconnection/
foreground and every 30 seconds. Runs serialize within a tab; database transactions
guard tabs. Failed work remains local and pending. Full inventory polling is a
bounded first implementation, not a measured scaling result.

Client limit: 1,000 pending operations and approximately 1 MB encoded JSON.
Server rejects over 2 MB JSON text. Oversized writing stays local; no truncation.
Paging/compaction needs review. Trash, receipts and conflict metadata have no
automatic expiry in this slice.

## Hosted verification - 2026-11-06

Original SQL was applied through SQL Editor, not CLI migration-history
registration. Eight catalog checks covered tables/RLS, grants, definer paths,
Auth references and initial emptiness. Original normalized/trimmed SHA-256:
28f44e9c4ee054d3ac097748ebfbb3a39bf9e0f1650413626b0dea23d428cec4.

The bounded two-account checks covered own access, foreign-owner denial,
same-ID isolation, exact/changed retries, response loss/newer local work,
conflicts, Trash/restore and terminal deletion. The first run's local-server
service-role probe had a network failure; a separate approved direct probe
denied all three original RPCs. Later resolution harness checks also passed
the current service-role route. The old network failure is not a current
authorization finding.

## Follow-up migration and hosted resolution checks - 2026-11-06

Seven catalog checks verified the follow-up objects/functions/RLS/grants/trigger.
Both confirmed accounts covered choices, stale review, retry identity, lost
resolution response, history recovery, Trash/restore, deletion/replay and reciprocal
owner isolation. All five RPCs denied anonymous, invalid JWT and service-role
requests. Final audit: four terminal heads, six scrubbed archives, two scrubbed
conflicts and 26 body-free receipts. Synthetic text was removed; Auth accounts
and minimal metadata remain. Local focused tests passed 36/36 with a later
overlapping 3/3 harness recheck, lint and Next build.

## Durable hosted reload recovery - 2026-11-06

The separate circle-os-writing-hosted-recovery-v1 account store reuses the
transaction/models/coordinator and confirmed-session transport. It never opens
product writing storage. Explicit controls/checkpoints require a changed document
time origin; HMR cannot satisfy reload. No hosted work runs on page load.

Both accounts passed pending save, accepted upload/lost reply, queued choice,
accepted resolution/lost reply, newer-writing/history recovery and queued terminal
deletion through reloads. Fresh synthetic-device recovery preserved archives.
Final audit: two version-7 terminal heads, four scrubbed archives, ten body-free
receipts and no conflict bodies. Replayed apply receipts left the head unchanged;
old resolution returned deleted. Four isolated Chromium cases passed, with
targeted lint and Next/TypeScript build.

This closes only the separate-test-store/page-reload gap. Product adapter,
cold restart, offline load, physical phones, eviction, valid-session expiry/
revocation/unconfirmed cases, lock contention and backup/retention remain open.

Exact commands, attempts, accounts' bounded scopes and cleanups are in the
[journey record](USER_JOURNEY_TESTING.md#hosted-account-writing-checks-2026-11-06),
[resolution evidence](USER_JOURNEY_TESTING.md#follow-up-migration-and-hosted-resolution-checks-2026-11-06)
and [reload evidence](USER_JOURNEY_TESTING.md#durable-hosted-reload-recovery-2026-11-06).
Counts overlap and are not a sum of unique coverage.

## Verification and activation gates

Focused commands from the repository root:

~~~powershell
node --test tests/writing-cloud-database.test.mjs tests/writing-transport.test.mjs tests/writing-model.test.mjs tests/writing-sync.test.mjs tests/writing-compatibility.test.mjs
node --test tests/writing-cloud.browser.mjs tests/writing-storage.browser.mjs tests/writing-provider.browser.mjs
node node_modules/next/dist/bin/next build
~~~

These are check entry points, not a claim they ran during this cleanup.
Database tests use PGlite synthetic Auth/roles; local browser checks use real
IndexedDB with synthetic HTTP/Auth fixtures. Hosted evidence above is separate.

Before a reviewed activation change, verify actual hosted roles/grants/config,
session expiry/revocation/unconfirmed denial, current protocol and production
writing-store recovery on target devices. Preserve private schemas outside the
Data API; expose only intended public RPCs. Verify lost responses, conflicts,
terminal deletion and stale-device recovery without personal migration.
Do not apply an already-applied migration to satisfy an outdated checklist.

Setting NEXT_PUBLIC_CIRCLE_WRITING_SYNC=enabled requires a separately approved
environment/build change. No activation is authorized by this documentation.
Production-store cold restart/offline load/eviction, true lock contention,
manual account deletion, protected admin/log access, backup/restore and 30-day
deleted-backup retention remain open release work.

The protocol's live-table scrubbing does not certify deletion from backups,
disconnected devices, logs, external services or future AI indexes.
Never put credentials or personal writing in fixtures or records.
