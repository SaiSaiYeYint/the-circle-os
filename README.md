# The Circle OS

Circle OS helps a person notice the life they live, explore the life they want
and reflect on chosen actions. Athena's intended feedback and motivation stay
grounded in the person's records. The person decides how to live.

Current goal: a mobile-first web beta for friends/family, with accounts, safe
sync, redesigned onboarding and requested paid Athena. iOS/Android follows web
learning. See [Product](docs/PRODUCT.md) and [Roadmap](docs/ROADMAP.md).

## Project documents

Read the relevant owner, not every plan or historical handoff.

| Need | Current owner |
| --- | --- |
| Working rules/approval | [AGENTS](AGENTS.md) and [Development workflow](docs/DEVELOPMENT_WORKFLOW.md) |
| Product direction/behavior | [Product](docs/PRODUCT.md) |
| Release dependencies/gates | [Roadmap](docs/ROADMAP.md) |
| Ordered next work | [Work plan](docs/WORK_PLAN.md) |
| Decisions/reasons/open choices | [Decision log](docs/DECISION_LOG.md) |
| Current job/session | [Current task](docs/CURRENT_TASK.md), [Handoff](docs/SESSION_HANDOFF.md) |
| Current/target system | [Architecture](docs/PRODUCTION_ARCHITECTURE.md) |
| Evidence/time/deletion/migration rules | [Record contract](docs/PERSONAL_RECORDS_AND_ATHENA_PLAN.md) |
| Writing cloud protocol/limits | [Account writing sync](docs/ACCOUNT_WRITING_SYNC.md) |
| Visual and interaction rules | [Design](DESIGN.md), [Page standard](app/os/APP_SESSION_STANDARD.md), [brand source](app/brand-system.ts) |
| Admin-first catalog/Explore work | [Content Admin plan](docs/CONTENT_ADMIN_PLAN.md) |
| Planned replacement onboarding | [Onboarding specification](docs/ONBOARDING_SPEC.md) |
| Founder audience hypotheses | [Audience and Purpose](docs/AUDIENCE_AND_PURPOSE.md) |
| Selected Home direction, unresolved mapping | [Personal Imprint](docs/PERSONAL_IMPRINT_HOME.md) |
| Deferred Reflect proposal | [Reflect proposal](docs/REFLECT_PAGE_POTENTIAL_IMPLEMENTATION.md) |
| Operating the quote catalog | [Quotes](docs/QUOTES.md) |
| Bugs and dated verification | [Bugs](bugs.md), [Journey record](docs/USER_JOURNEY_TESTING.md) |
| Retired plans and prior session evidence | [Archive index](docs/archive/2026-11-11-doc-cleanup/README.md) |

Current documents distinguish implemented behavior, approved targets, proposals
and open choices. Archived plans/history are evidence, not active instructions.
Git owns code and repository documents; external runtime files remain integrations.

## Current product and data

- /os: Today and full-page Note/Deep Thoughts, Routine/Protocol, Log/Week pairs.
- /os/mirror: existing Reflect declarations, readings and chapter/Quest paths.
- /os/home and /os/explore: bottom-nav roots, intentionally empty for now.
- / and /brand: public Circle site and identity system.

Verified Supabase entry and account-separated local stores exist. The planned
onboarding will replace current Day One; its new screens/signup are not built
by a documentation decision.

Main records use IndexedDB with localStorage copy/migrations. Account writing
has a separate owner-scoped ledger. Both writing SQL migrations have bounded
hosted evidence, but automatic product sync remains off. General lifestyle sync,
personal migration, device recovery and operating backups are not certified.
Login is not a cloud backup.

Legacy mode can use the file-based profile server and prepared Athena content;
account mode rejects that legacy transport. Development test mode isolates
synthetic accounts and is rejected in production. Live requested paid Athena
and membership enforcement remain planned. Details: [Architecture](docs/PRODUCTION_ARCHITECTURE.md).

## Local development and checks

Node.js >=22.13.0 and npm are required.

~~~bash
npm install
npm run dev
~~~

Use focused checks under the [workflow](docs/DEVELOPMENT_WORKFLOW.md#choosing-checks).
Common entry points:

~~~bash
npm test
npm run lint
npm run build:vercel
~~~

npm test runs the Vinext build before the model test suite.
npm run build:vercel checks the separate Next production target.
Documentation-only edits need statement/reference/link review and whitespace
checks; they do not establish fresh runtime acceptance.

## Deployment and Admin

Sites/Vinext uses npm run build; Vercel uses npm run build:vercel via vercel.json.
Deploy only on the developer's explicit request.

The hidden Admin requires a private server-side CIRCLE_OS_ADMIN_CODE of at
least 16 characters. Put a unique value in ignored .env.local for local use,
or the hosting environment for that target. Missing/short configuration stays
locked. Never prefix it NEXT_PUBLIC_, put it in client code, or commit it.
The reserved entry phrase opens the password prompt; it is not authentication.
See the [Admin contract](app/os/APP_SESSION_STANDARD.md#admin-previews-and-access).
