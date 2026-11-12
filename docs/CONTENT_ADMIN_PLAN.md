# Content Admin and Explore plan

## Catalog follow-up — 2026-11-11

Developer approved local publication, signed-in reading/images and withdrawal/
restore. Migration 003 is prepared, not applied. Publication snapshots exact saved
drafts with revision checks and retry receipts. Each new version is immutable;
Article identity uses its draft ID rather than the placeholder chapter ID.
Bundled IDs are reserved at the application boundary; use independent copies.
Withdrawal hides discovery while any verified signed-in account can still read
exact old links. Publishing while withdrawn does not restore discovery.
Images remain private; published references permit targeted signing. The app
issues five-minute links, which are temporarily shareable and cannot be recalled
on logout. Chapter reading uses local runs; Reflect resolves exact definitions.
New Chapter links preview without saving evidence; existing unfinished runs resume
locally and completed runs cannot be rewritten. Starting new runs through Explore
remains separate, preserving current rationing. New reads/image refresh need a
connection. Explore, legacy import and deployment
remain separate. See Current Task and journey evidence for acceptance gaps.

Approved direction: 2026-11-11, Asia/Bangkok. Documentation approved; application,
SQL, Storage setup, content publication and deployment need bounded implementation
approval. The developer separately requested committing/pushing current repository work.

## Priority and purpose

Build Admin and the shared Supabase catalog first, then Explore.
This supersedes the old after-beta deferral of live chapter publishing.
Critical data-safety and blocked journeys still gate dependent work; existing
safe-sync, onboarding, membership and Athena release requirements remain.

Explore helps the audience understand themselves, discover interests and choose
small actions within reach. Use the founder's [audience brief](AUDIENCE_AND_PURPOSE.md)
without treating its hypotheses as research. Simple English, limited money/time,
uncertainty and returning after interruptions must inform editorial review.
The developer owns authored philosophy and approves content.

## Confirmed scope

- Shared Supabase catalog managed inside the app through the developer's account.
- Chapters, articles/blogs, habit templates and Protocol templates.
- Image support in chapters and articles/blogs.
- Users preview/personalize templates and explicitly add them to Routine/Protocol.
- Ordinary content additions and edits require no code edit or redeployment.
- Reuse current authoring, Page, persistence and domain engines.

## Existing foundation and gaps

The approved first implementation has bounded hosted setup/verification. See
[setup, access and remaining limits](CONTENT_ADMIN_SETUP.md). The second Admin
invitation awaits verification. The inventory below describes the starting foundation; the account
path now has shared-draft/recovery and private-media code, with publishing,
content images and additional editors still pending.

Repository inventory: 47 distinct chapter IDs across 56 versions, plus three
Quests. This does not inventory external publications or browser-only drafts.

| Group | Distinct chapters | Review |
| --- | --- | --- |
| Self-understanding | 12 | Rhythm, attention, support, surroundings, choice, rest, meaning, interests/growth, gratitude and daily learning |
| Daily opening/check-in | 6 | Five short feeling/day prompts and Day Open |
| Wanted-life declarations | 4 | Vision, Mission, Typical Tuesday and Dreamline; some assume clarity the audience may lack |
| Setup/review | 5 | Day One, Habit, Log, Week setup/review; not automatically general Explore content |
| Playful Sparks | 20 | Prompts, jokes and games; automatic writing delivery remains paused |

Existing Quests: Getting started, The life you want, Knowing yourself.
Audit relevance/copy/length before inclusion. Preserve published versions and
old runs; improved content uses new versions. Do not publish every old item
or resume paused delivery merely because a catalog exists.

Chapter Workshop has authoring, validation, preview and browser-local drafts.
Public publishing uses the legacy profile server and rejects account mode.
Admin unlock is password/cookie based, not an account-bound author role.
Quotes already have a separate shared Supabase catalog.
There is no general article editor, media library or adoptable habit/Protocol
catalog in the inspected app. Chapter schema/player have no image field/rendering.

## Proposed Admin experience

One library with Chapters, Articles, Habits, Protocols and existing Quotes.
Use Create -> Save draft -> Preview -> Publish. Drafts are admin-only;
published items feed Explore. Exact catalog read audience needs implementation
review. Admin access must be checked server-side against the verified account,
never a client toggle or user-editable alias/metadata.

| Editor | Proposed fields and behavior |
| --- | --- |
| Chapter | Current typed Pages/questions/choices plus images; preserve the shared player and immutable versions |
| Article/blog | Title, summary, cover image, headings, paragraphs and inline images; treat blogs/articles as one reading type initially |
| Habit | Action, cue, optional result/supporting explanation; preview the actual Routine representation |
| Protocol | Name/purpose, allowed duration, required/optional terms and supporting explanation; preview an editable draft |
| Media | Upload/reuse images, alternative text, optional caption and mobile preview |

Article block editing and image placement received the subsequent review below.
The developer subsequently approved cover/title/summary and movable heading,
paragraph and image blocks, shared draft saving/recovery and previews. Newly
created Chapters and Articles use the current glass design; existing chapters
retain their appearance. Image selection uses stable private Media references,
alternative text and optional captions. Catalog publication remains separate.
Do not introduce arbitrary executable HTML. Normal content editing uses supported
fields/blocks; entirely new interaction types still need reviewed code.

## Supabase catalog and media direction

Store catalog identities, drafts, published versions, metadata and asset
references in Supabase Postgres; image files in Supabase Storage.
Review exact schema, admin ownership/grants and migrations before provisioning.

Separate editable drafts from immutable published versions. Withdrawing an item
hides future discovery; it must not destroy old answered chapters or adopted
personal records. Keep original chapter versions available for saved runs.
Catalog content is curated shared material, not private personal evidence.

Proposed media behavior: private draft access, controlled published access,
validated types/sizes, stable asset identities, alt text/captions and responsive
rendering. Published assets must not be overwritten beneath an immutable version.
Review replacement, unused-upload cleanup, retention and withdrawal semantics
before deletion. A removed image must not break an earlier saved chapter.

Storage supports private buckets/RLS and limited-time signed URLs; public buckets
allow anyone with a URL to retrieve content. Choose actual access policies
deliberately; shared catalog does not by itself mean public-web media.
[Storage access models](https://supabase.com/docs/guides/storage/buckets/fundamentals),
[access controls](https://supabase.com/docs/guides/storage/security/access-control).

## Explore and adoption

Explore offers audience-relevant chapters, articles and practical templates.
Candidate themes: interests, recognizing effort, manageable experiments,
obstacles, chosen habits and returning after a missed day. These are editorial
proposals, not approved authored lessons or promises of employment/income.

Browse -> preview -> personalize -> explicit Add to Routine/Protocol.
Preview alone saves no commitment. Adopted items become personal copies with
source/version provenance; catalog changes never rewrite them.
Suggested first Protocol behavior is an editable draft, followed by deliberate
Start phase. Protect any existing active/draft phase; exact conflict handling
needs review. Reuse domain actions, not the first-use Habit projection that can
replace an existing starter and change identity focus.

Prevent duplicates on retries/double clicks. Do not mark a newly added habit
done, start a phase incidentally, replay setup or fabricate personal evidence.
Review optional chapter-to-template links and manual chapter budgets without
silently changing current rationing. Catalog publication needs no personal AI.

## Implementation slices and acceptance

1. Account-bound Admin, shared catalog and media foundation: exact schema,
   policies, drafts/versions/assets and recovery. Verify admin allow, ordinary/
   signed-out denial, draft privacy and cross-account boundaries.
2. Editors: chapter/article images and habit/Protocol templates, retaining Quotes.
   Verify save/reload, upload failure/retry, preview, mobile layout, publication,
   new versions, withdrawal and immutable old content. Test real hosted policies
   separately from synthetic/local proof.
3. Explore consumption and adoption: reviewed browse/reader/preview flows,
   offline/cache behavior and local-first domain creation. Verify retry,
   existing-phase protection, reload, account switching and old-run preservation.
4. Audience content review: retain/improve/retire existing entries with developer
   approval, then add authored material. No bulk legacy migration/publication
   or invented content is authorized by this plan.

Review each slice's exact source/test/SQL/config scope before implementation.
No remote setup, migration or deployment is authorized by this documentation.

## Open details and next action

Confirm admin-account bootstrap/recovery; signed-in versus public catalog reads;
article controls/image placement; media limits/access/cache/retention; authoring
draft recovery/concurrency; existing local-draft migration; template provenance,
duplicate handling and active-phase conflict behavior; exact Explore composition
and content cadence. Routine packs with several habits are not yet specified.

Next: prepare the bounded first implementation proposal for account-bound Admin,
Supabase catalog and media foundation. Preserve the current personal stores,
06:00 Circle day, immutable chapters/readings and all earlier verification gaps.
