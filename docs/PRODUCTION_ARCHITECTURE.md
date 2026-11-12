# Circle OS architecture

Updated: 2026-11-11, Asia/Bangkok. This owns the current/target system map.
[Product](PRODUCT.md) owns direction; [record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md)
owns evidence lifecycles; [writing sync](ACCOUNT_WRITING_SYNC.md) owns its protocol.
Dated implementation history remains [archived](archive/2026-11-11-doc-cleanup/PRODUCTION_ARCHITECTURE.md).

## Current system

| Layer | Implementation and boundary |
| --- | --- |
| Web runtime | Existing Vinext/Cloudflare-compatible and separate Next.js/Vercel build targets. Verify the intended target; passing one does not certify the other. |
| App shell | CircleStateProvider and shared Page/swipe/App-back/button engines. Full-page daily-tool pairs coexist with existing Reflect/chapter contexts. |
| Roots | /os/home, /os (Today), /os/mirror (Reflect), /os/explore; shared bottom navigation. Home/Explore intentionally empty. |
| Account entry | Supabase verified email/password and auth alias, reset-link handling, account scope and retained offline-entry proof. Current setup is invitation-only; public signup belongs to the replacement onboarding target. |
| Main local state | IndexedDB plus localStorage copy, migrations and legacy outbox. Account-separated keys in account mode; circle-os-state-v2 in legacy mode. |
| Account writing | Separate owner-scoped IndexedDB ledger and local queue/cloud state; not copied into CircleState or the legacy server payload. |
| Writing cloud | Private SQL tables and authenticated RPC transport, conflict resolver/status UI; both migrations applied with bounded hosted checks. Automatic product sync flag remains off. |
| Legacy server | local-ai/server.mjs and circle-os-ai.ts use external profile/day files, recovery/device attachment and prepared content. Account mode rejects that transport. |
| Prepared Athena | Existing authored editions, memory/source models, chapters and deterministic local observations. No live provider integration is certified. |
| Public quote catalog | Supabase catalog with Admin-managed add/remove and local offline cache; separate from private personal evidence. |

db/schema.ts remains scaffolding; the D1 adapter is not the Supabase lifestyle
database. A hosted account does not imply all lifestyle domains sync.

### Accounts and mode boundaries

Supabase account entry selects separate local stores. Auth aliases remain in
authentication metadata; current header controls are Edit alias and Sign out.
The greeting reads that alias, including offline return. Editing it requires
a connection and failed changes retain the accepted value.

Verified-email entry and browser recovery exist. Hosted settings and developer
reports of sign-in/reset/logout/offline return have dated evidence, but not
complete mail/session/device certification. Offline proof permits retained local
entry only; remote RPC authorization requires a confirmed current Supabase
session. Scope epochs/abort guards reject late responses after account changes.

Development test mode uses isolated synthetic accounts and is rejected in
production; a mode change requires restart. It is not evidence of a real user's
hosted storage. Legacy mode retains its own server/identity behavior.
Never silently assign its records to a signed-in account.

### Account writing

The local engine, compatibility adapter, provider and editors are implemented.
Recovery/drafts, committed entries and immutable revisions are separate.
Older same-account answers can appear as read-only compatibility evidence;
unknown dates stay unknown. No personal import is implied.

Each command captures account, generation/version and retry identity. A save
receipt establishes local acceptance; a fresh store read renders accepted state.
New typing stays a newer buffer. Failed writes retain recoverable text.
Same-tab/BroadcastChannel/storage notifications carry no writing bodies;
foreground refresh is the fallback if background channels are unavailable.
This does not fix the older whole-state store's concurrency protocol.

Local writing deletion scrubs answer/version/draft bodies but retains minimal
question/app-use metadata. Reflect's writing-derived context checks current
owner/source/version dependencies and withholds mixed or unknown dependencies.
That bounded behavior is not a new authorization system for unrelated domains.

Both writing SQL migrations were applied on 2026-11-06. Hosted owner-denial,
conflict resolution and separate-test-store reload/replay checks are recorded.
Product activation remains off. See the exact
[protocol and remaining gates](ACCOUNT_WRITING_SYNC.md), not older pending-migration
statements. No admin-writing reader or service-role evidence transport is added
by those RPCs.

### Tool and domain behavior

- Goal steps are the same tasks Routine shows. Week groups open goals and filters
  steps by selected day; it does not duplicate task ownership. Goal/task archive
  and completion feed saved History. Day's Record derives from existing Log.
- Log text corrections retain the original day, range and identity with immutable
  before/after words. Unchanged saves write nothing; stale edits are rejected.
  Empty corrections suppress stale resurrection.
- Routine records use saved completion wording/parts, not today's renamed habit.
  Unnamed Habit work stays a draft; later manual edits survive recovery.
- Protocol terms are prospective from next Circle day, with saved dated wording
  and seals. Past phases are read only; prior correction receipts remain.
- Entry after completed Day One is direct. Setup/review/greeting prompts do not
  interrupt it. Genuine unfinished runs preserve their version.
- Chapter answers/history and received reading history are read only; browsing
  never reapplies completion, creates goals/phases or publishes readings.
- Automatic writing Sparks are paused. Note's mixed Line entry is hidden;
  Deep Thoughts keeps its managed Quote. Retained records/content are not removed.
- Declarations version only on deliberate Save declaration. Character is the
  highest wanted-life authority; current visible fronts remain separate from
  planned Character/Six-month layouts.

The [Page standard](../app/os/APP_SESSION_STANDARD.md) owns interaction and
[Design](../DESIGN.md) owns visual contracts. Full-page tool adoption does not
globally migrate compact/chapter surfaces.

## Source map

| Responsibility | Entry points |
| --- | --- |
| State/startup | app/os/circle-os-shell.tsx, app/os/circle-os-store.ts |
| Account scope/entry | app/os/account-scope.js, app/os/auth/ |
| Writing engine/provider | app/os/writing-model.js, writing-store.ts, writing-provider.tsx, writing-pages.tsx |
| Sync protocol | app/os/writing-sync-model.js, writing-cloud-model.js, writing-cloud-sync.js, writing-conflict-model.js |
| Sync runtime/UI | app/os/writing-transport.ts, writing-cloud-runner.tsx, writing-sync-provider.tsx, writing-sync-page.tsx |
| Hosted diagnostic | app/os/sync-check/; durable-checks.ts uses a separate synthetic store |
| SQL | supabase/migrations/202611050001_account_writing.sql and 202611060001_writing_resolution.sql |
| Chapters | app/os/chapters/, scripts/chapter-compiler.mjs |
| Legacy integration | app/os/circle-os-ai.ts, local-ai/server.mjs and local-ai/README.md |

Legacy filenames remain until a reviewed migration. Runtime external files are
not replaced by changing product-document authority.

## Planned Content Admin and shared catalog

The approved local catalog follow-up adds mutable item/discovery state and
immutable version/image references. Transactional RPCs snapshot saved drafts and
record exact retry receipts. Signed-in reads separate discovery from exact old
versions. Withdrawal preserves content/assets. Targeted image signing uses the
caller token and Storage policies. Migration 003 remains unapplied; no hosted
acceptance is claimed. Direct Chapter readers use local runs and Reflect resolves
exact catalog definitions, never newer replacements.

[The Admin-first plan](CONTENT_ADMIN_PLAN.md) extends existing authoring with
server-verified developer-account privileges, a shared Supabase Postgres catalog
and Supabase Storage media. Chapters and articles/blogs support images; habit
and Protocol templates create user-personalized copies through existing domain
actions. Shared material stays separate from personal evidence.

The first account-Admin/catalog/media implementation and both foundation/operations
migrations have bounded hosted verification; see [setup and current limits](CONTENT_ADMIN_SETUP.md).
Two content grants exist, with the second invitation awaiting email verification.
Account Workshop saves shared drafts,
uses account/tab recovery, and blocks the legacy publisher and run-reset paths.

Review draft/published access, immutable versions/assets, schema/policies,
media lifetime and account bootstrap before implementation. Current password
Admin, browser drafts and legacy publishing are foundations, not this account-
bound service. Hosted private Storage and shared draft access are verified for
synthetic accounts and actual built HTTP routes. Live publication remains pending.
Explore consumes the catalog after Admin is built.

## Target system and constraints

The target is Supabase accounts/private evidence shared across web and future
native clients, with a constrained server evidence service for requested Athena.
Each account owns one profile. Enforce owner checks on server/background paths,
not merely UI filtering. Keep private evidence apart from auth/payment details,
optional public summaries, source revisions and derived memory.

Local writes stay durable until exact server acknowledgement. Existing writing
protocol is one bounded implementation, not a blanket protocol for every domain.
Review schemas, policies, transaction/receipt/retention and migration per domain.
Backups, manual deletion, restore suppression and account/session recovery are
part of the release architecture, not assumed provider guarantees.

### Replacement onboarding and Home

[ONBOARDING_SPEC.md](ONBOARDING_SPEC.md) replaces the old optional Day One action
target. Public signup, chosen name, private birthday, reported experiences,
wanted changes, usual times, one confirmed habit and feeling are distinct data.
Do not mix identity, self-report, intention, behavior or inferred progress.

Reuse current account/local/domain engines. Review new record/revision/history/
deletion/sync contracts, uncertain answers, age eligibility and existing-user
transition before implementation. Preserve immutable old runs, access and records;
never rewrite a published id@version in place.

[Personal Imprint](PERSONAL_IMPRINT_HOME.md) is a selected visual direction,
not implemented evidence processing. Current roots and full-page tools already
exist; source mapping/brightness/fading and direct-entry wiring from Home remain
future work. Feeling is separate from activity state, not a worth score.

### Athena access boundary

Only a paid explicit request authorizes new interpretation/memory update.
Authenticate, check entitlement/reserve usage, select relevant same-owner saved
history with sources/current corrections, exclude drafts/Trash/deleted/invalid
context and login/payment data, then generate/validate/store the requested result.
A requested result appears when ready; asynchronous mechanism remains unselected.

The model receives selected evidence, never administrator credentials.
Corrections and source deletion invalidate dependent context. Wrong / Has changed /
Forget are confirmed controls with exact semantics still open. Old authored
editions stay immutable; how to qualify them after source correction/deletion
requires review. No-save model calls or background profiling are authorized.

Provider/model, processing facts, quality, cost/latency, quotas, retry and
no-change rules remain integration decisions. Existing prepared content and its
external scheduler are separate; source presence is not operating evidence.

### Membership, privacy and operations

Follow [Product](PRODUCT.md#membership) for fixed-day grants/renewal, expiry,
Myanmar allowance resets and free-core access. Server-side enforcement and
concurrent reservations remain planned.

Target admin has always-available read-only personal-writing access and manual
account deletion on request. Admin-only logs may contain writing; retention/read
auditing remain open. Backups must expire deleted data within 30 days and prevent
restore resurrection. No user export/download is in beta.

Singapore is the chosen database region. Actual project/connection and provider
processing facts need their own evidence. Publish understandable data-use facts;
the accepted lack of another AI opt-in prompt does not verify provider terms.

## Required proof before wider use

Production writing adapter/device recovery; session expiry/revocation and lost
devices; true database lock contention; regional connections; other-domain sync;
approved legacy owner mapping/import/rollback; backup/restore/deletion/retention;
protected admin/log operations; explicit entitlement/evidence boundaries; target
phone/keyboard/install/update behavior; and actual hosted release journeys.

Use the [roadmap release gates](ROADMAP.md#release-gates) and
[journey record](USER_JOURNEY_TESTING.md). Local builds or the separate durable
test store do not certify the production writing store, cold browser restart,
offline page load, physical phone or operating-system eviction.

