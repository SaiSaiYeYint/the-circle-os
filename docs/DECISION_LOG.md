# Circle OS decision log

Updated: 2026-11-11, Asia/Bangkok. This records current decisions, reasons and
open choices. Owning documents hold the full current rules. Earlier decisions,
including superseded trials and their reasons, remain in the
[dated decision archive](archive/2026-11-11-doc-cleanup/DECISION_LOG.md).

A later timestamp alone is not authority. A change needs the developer's
decision and the reviewed scope. Proposed features remain proposed even when
their discussion is saved. Historical approval does not authorize a new edit.

## 2026-11-11 - Documentation cleanup and onboarding replacement

The developer approved consolidating rules, resolving discrepancies, shortening
active documents, archiving useful history and removing unnecessary active
documents. They explicitly clarified that the implemented onboarding will be
replaced by the already planned redesign. The replacement
[onboarding specification](ONBOARDING_SPEC.md) now owns that target; the older
optional-action Day One plan is historical.

Reason: agents and the developer need one clear direction instead of successive
updates above contradictory older requirements. Preserve unique existing work,
verification evidence, old immutable content and real records. Align authorities
without implementing planned features or declaring unrun checks passed.

The cleanup retains separate current behavior, confirmed target, proposal and
open-question status. Public signup target does not authorize enabling it or
public release. Current onboarding versions/runs remain unchanged pending a
reviewed implementation/migration.

## 2026-11-11 - Content Admin first, shared catalog and images

Developer requested audience-tailored Explore with chapters and adoptable habit/
Protocol templates, then prioritized Admin with a shared Supabase catalog and
articles/blogs plus images in both articles and chapters. They explicitly approved
the documentation update and committing/pushing all current repository work.

Reason: author and publish normal content from the app/account without editing
code for every item. Admin/catalog/media precede Explore consumption and
supersede the former after-beta publishing deferral. Critical safety gates and
other beta requirements remain. [The plan](CONTENT_ADMIN_PLAN.md) separates
confirmed scope, proposed mechanics, open contracts and implementation checks.
Code, hosted setup, personal migration and publication need their own scopes.

## Current decisions and reasons

On 2026-11-11 the developer approved local catalog publication, signed-in reading/
images, withdrawal and explicit restore. Exact old links remain readable by any
verified signed-in account, including first-time readers. Reason: preserve old
runs/references without per-reader entitlements. Publishing while withdrawn does
not restore discovery. Hosted migration, synthetic checks, authored publication
and deployment remain separate approvals.

On 2026-11-11 the developer reviewed the Media page and approved chapter/article
editing, image selection/preview and glass design for newly created content.
Existing chapters must retain their design. Persist an explicit design marker on
new chapters rather than inferring appearance from dates or changing old data.
New independent copies use glass; existing-version edits retain their design.
Articles begin with glass. This reviewed repository slice includes focused tests
and continuity records; catalog publishing remains a separate slice.
The developer subsequently approved Article ordering as cover image, title,
summary, then body, in both the editor and reading preview.

The developer subsequently explicitly approved hosted migration, both requested
content-admin grants, the second account's invitation and bounded synthetic
verification/cleanup. Both migrations were applied on 2026-11-11. This approval
does not include deployment, publication, personal migration or writing activation.

The developer approved the first bounded Content Admin repository implementation
in chat on 2026-11-11: account permission, shared chapter drafts/recovery,
catalog/media foundation, Quotes integration and verification records. Hosted
setup, publication, deployment and migration of personal/legacy drafts remain
outside that approval. See [prepared implementation and limits](CONTENT_ADMIN_SETUP.md).

| Decision | Current rule and reason | Owning reference |
| --- | --- | --- |
| Product and audience | Support chosen action/reflection without scoring a person's worth. Founder audience assumptions remain hypotheses, not research. | [Product](PRODUCT.md), [audience](AUDIENCE_AND_PURPOSE.md) |
| Delivery | Web beta includes accounts, safe sync, replacement onboarding, membership and requested Athena; native follows. Supersedes core-first/Athena-later. | [Roadmap](ROADMAP.md) |
| Work cycle | Critical safety/blocked journeys before dependent work; optimize only a named measured problem, then reverify. Broad optimization is not a blanket prerequisite. | [Workflow](DEVELOPMENT_WORKFLOW.md) |
| Document authority | Repository-owned documents replace unavailable external product notes. Runtime external files still require deliberate migration. | [AGENTS](../AGENTS.md), [architecture](PRODUCTION_ARCHITECTURE.md) |
| Manual review | Developer reviews the behavior, exact scope and checks before edits; approval covers that scope. Neither agent approves the other. | [AGENTS](../AGENTS.md) |
| Onboarding | Planned required-answer flow replaces current onboarding: public signup/verification, chosen name, private birthday, background/experience/wanted change, times, one chosen daily habit, previews and feeling. Reason: recognize the person's starting point and create a usable beginning. | [Onboarding](ONBOARDING_SPEC.md) |
| Onboarding preservation | Old published versions, unfinished runs, completed access and records remain intact until reviewed replacement. Never rewrite immutable content to simplify migration. | [Record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md) |
| Identity | Name/nickname is enough; no required public real name or second alias field in the target. Current auth alias remains distinct from personal evidence. | [Product](PRODUCT.md#privacy-and-identity) |
| Home | Personal Imprint is selected direction. Exact silhouette/mapping/fading and Protocol placement are open; no worth/willpower percentage. | [Home brief](PERSONAL_IMPRINT_HOME.md) |
| Reflect | Today/Reflect previews serve different purposes. Replacement layout, discoveries and Keep in Reflect remain saved proposals; implementation deferred. | [Reflect proposal](REFLECT_PAGE_POTENTIAL_IMPLEMENTATION.md) |
| Tool family | Six opened tools/supporting views use Routine's shared visual/motion engines, 24px anchors, full-page floor and natural growth. Reason: measurable consistency and reusable behavior. | [Design](../DESIGN.md#shared-tool-contract---2026-11-11), [Page standard](../app/os/APP_SESSION_STANDARD.md) |
| Checkboxes | Shared Orange glass/liquid and immediate white Log ✓. Protocol toggles only through its checkbox; passive kept words fill Orange without strikethrough. Earlier whole-row action/no-tick rules are retired. | [Design](../DESIGN.md#frame-and-controls) |
| Completion timing | Shared immediate 300ms response; retire Week's checkbox-first and three-second waits. Structural change is 600ms; typing immediate. | [Page standard](../app/os/APP_SESSION_STANDARD.md#shared-tool-interaction-contract---2026-11-11) |
| Entry/navigation | Four-root nav exists; /os remains Today, Home/Explore empty. Completed Day One enters directly; no automatic setup/review/greeting. Opened tools stay selected. | [Page standard](../app/os/APP_SESSION_STANDARD.md#navigation-and-entry) |
| Content pause | Note Line entry hidden and automatic writing Sparks paused; retain content, versions and progress. Reason: developer's explicit temporary pause while designs are reviewed. | [Product](PRODUCT.md#current-daily-tools) |
| Writing | Multiple titled Notes, silent autosave/recovery; Deep Thoughts Send/correction/Next question. No ordinary Thoughts composer, Versions/Undo or Discard draft UI on account writing. | [Product](PRODUCT.md#current-daily-tools), [record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md) |
| History/corrections | Preserve prior wording/dates. Week reviews remain read only; past Habit corrections/shared day view deferred. Trash has no expiry and stays out of Athena. | [Record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md) |
| Deleted questions | Keep minimal question/app-use metadata after Deep Thought deletion without answer/version/draft bodies. Reason: deletion must not reset answered questions/first use. | [Record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md#trash-permanent-deletion-and-retention) |
| Protocol | Separate editing, next-day agreement changes, immutable old terms/seals and read-only past phases. Five durations: 1/3/7/14/21 days. | [Page standard](../app/os/APP_SESSION_STANDARD.md#routine-and-protocol) |
| Week | Open goals stay across tabs, tasks are day-filtered/shared with Routine. Goals complete manually; archiving preserves linked words/history. Sunday review outcomes are deliberate. | [Product](PRODUCT.md#current-daily-tools) |
| Wanted life | Character is authoritative; Routine identity then Mission are labelled fallbacks. Vision/Character/Mission/Tuesday/Six months and finite Dreamline stay distinct. | [Product](PRODUCT.md#wanted-life-records) |
| Give versus ask | Lines are unrationed and have no run/version/cooldown/completion; Chapters that ask remain rationed. Check supply before proposing a budget increase. | [Page standard](../app/os/APP_SESSION_STANDARD.md#writing-and-lines) |
| Immutable content | Published chapter id@version and authored reading editions never change. New prose means a new version/edition; derived observations are not authored publication. | [Page standard](../app/os/APP_SESSION_STANDARD.md#reflect-declarations-and-editions) |
| Local-first | Keep local evidence until exact acknowledgement; explicit empty/deleted revisions prevent stale restoration. Device clocks never choose conflict winners. | [Writing sync](ACCOUNT_WRITING_SYNC.md), [record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md) |
| Day/time | Local Circle day starts 06:00. Writing retains its starting day; old records retain attribution through travel. Quota reset in Myanmar time is separate. | [Record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md#time-backdating-and-travel) |
| Athena requests | Person requests a reading; it appears when ready. One optional question; saving answers triggers no reply. Requested follow-ups are limited by allowance. Reason: person controls when AI joins and incurs usage. | [Product](PRODUCT.md#athena) |
| Athena evidence | Relevant same-owner history with sources/corrections; no drafts/Trash/deleted/login/payment context, model calls on save or background profiling. No administrator credentials for a model. | [Record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md#athena-evidence-and-user-controls) |
| Paid boundary | Core/history/sync and received readings stay free/available after expiry; only new generation is paid. | [Product](PRODUCT.md#membership) |
| Membership time | Manual 30/90/180/365-day grants, active renewals from expiry, expired renewals from grant, local expiry display. Myanmar daily carry clears at membership monthly reset; failed requests use no allowance. | [Product](PRODUCT.md#membership) |
| Language | Simple English UI/responses at launch; Burmese/English input. Burmese/English UI/responses after launch, no Thai requirement. | [Product](PRODUCT.md#purpose-and-destination) |
| Privacy/operations | Verified email/reset, manual lost-email recovery; Singapore target; admin read-only writing, admin-only writing-bearing logs, manual account deletion, deleted backups at most 30 days, no beta user export. Actual procedures/provider disclosures need evidence. | [Product](PRODUCT.md#privacy-and-identity) |
| Deployment | Explicit developer request only; no release authority from a plan or another agent's review. | [AGENTS](../AGENTS.md) |

## Preferences and open decisions

| ID | Topic | Next decision |
| --- | --- | --- |
| O-01 | Accounts/recovery | Public signup rollout, email recovery/delivery, lost-email proof, session renewal/revocation/lost devices and production-device recovery |
| O-03 | Athena/membership | Provider/processing facts; exact tone/quality; control semantics; allowance/counting/reset-cycle/renewal/retry math, prices and budget |
| O-04 | Rewards | Formula/fairness/abuse/privacy/visibility and timing remain undecided; no invented personal-worth score |
| O-05 | Privacy/operations | Log retention/read audit, deletion coverage/turnaround, backup/restore suppression and published data-use wording |
| O-06 | Trial/release | 10–20 testers remain the recorded scope; devices/browsers, regional checks, duration/success criteria and public rollout are open |
| O-07 | Native | Framework and distribution deferred until web learning |
| O-08 | Replacement onboarding | Validation/uncertain answers, age eligibility, exact new record contracts, final completion and existing-user transition |
| O-09 | Home | Silhouette/source mapping, unknown answers, brightness/fade window, Log time interpretation and Protocol placement |

Do not treat an unresolved detail as permission to revive an older rejected
direction. The [work plan](WORK_PLAN.md) schedules questions before dependent work.
Historical conflicts that have been resolved are not current open questions.

## Decision history

The [archive index](archive/2026-11-11-doc-cleanup/README.md) explains which old
plans were retired and where useful requirements now live. Full dated decisions
retain their reasons and original verification boundaries in the
[decision archive](archive/2026-11-11-doc-cleanup/DECISION_LOG.md).
