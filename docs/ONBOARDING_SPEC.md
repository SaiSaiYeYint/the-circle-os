# Circle OS onboarding specification

Flow reviewed: 2026-11-08. Replacement direction reaffirmed: 2026-11-11, Asia/Bangkok.

## Status and approved scope

This is the planned replacement for the implemented onboarding. The developer
confirmed that direction and approved aligning the active documents on 2026-11-11.
The older optional-action Day One plan is superseded as the future target.

The reviewed flow below remains a target, not implemented screens. Preserve
published old versions, completed access and unfinished runs until the reviewed
replacement is built. Public signup does not authorize activation or public rollout.
Implementation, new records/sync, personal migration and deployment need their
own bounded scopes.

Use [Product](PRODUCT.md), [Roadmap](ROADMAP.md),
[record contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md), [Design](../DESIGN.md)
and the [Page standard](../app/os/APP_SESSION_STANDARD.md).
The [audience brief](AUDIENCE_AND_PURPOSE.md) supplies founder hypotheses;
[Personal Imprint](PERSONAL_IMPRINT_HOME.md) supplies the selected Home direction.

## Intended experience

Help a person describe their current life, recognize real effort, name changes
they want, and leave with Log configured and one daily habit created. Onboarding
may be long. Each question or action has its own screen, with short, simple
English. Follow-ups appear when they help set up Home or a tool, rather than
after every multiple-choice answer.

Home keeps three meanings separate:

- **Ground covered:** experiences the person reports from their life.
- **Wanted Change:** changes they want, with one current focus.
- **Habit:** a daily action they explicitly choose to start or keep doing.

A habit need not serve the wanted change. Someone may want to become a film
producer and choose daily push-ups. Circle and future Athena must not invent
a connection or treat the habit as evidence of progress toward that ambition.

## Confirmed decisions

| Area | Agreed target |
| --- | --- |
| Entry | Anyone can create an account. Verify email before account use. |
| Name | Ask what the person wants to be called; a name or nickname is enough. Do not ask separately for a full name and alias. |
| Birthday | Collect day, month and year with vertical scrolling wheels. Store it as private user data for future Athena use. No new birthday feature or live AI capability is implied. |
| Required answers | No Skip actions during onboarding. Keep questions easy and use choices where helpful. Wake-up and bedtime require actual selected times, with no variable-time alternative. |
| Current situation | Multiple selections are allowed, including overlapping work and study situations. |
| Life right now | Ask a separate question about their current position, such as exploring interests or choosing a direction. |
| Follow-ups | Add them when needed for dashboard/tool setup. Exploring interests alone does not trigger an interest-detail question. |
| Past effort | Allow several distinct experiences, each with its own description and ongoing, finished or stopped status. |
| Wanted Change | Allow several answers, remove Follow through on things I choose, and use the shorter Work toward something label. Ask which matters most when several were chosen. |
| Daily rhythm | Ask wake-up time and bedtime on separate screens, then show a read-only Log preview. |
| Habit | Everyone creates one daily habit. Support both starting a new habit and continuing one they already do. Editing remains available from the main Habit page later. |
| Habit suggestions | Offer suggestions plus Write My Own. Remove Write a few lines. Do not add the separate What will you do each day? detail screen. |
| Habit cue | Offer After I wake up, After lunch, Before bed, and Another time. Another time opens a custom cue field. |
| Habit preview | Show the created habit in the actual layout, unchecked and read-only. Remove This is where you'll mark your habit done. |
| Feeling check-in | Include How do you feel right now? in onboarding after the Habit preview. Use a circular finger-controlled 0-10 dial. |
| Scale explanation | Explain once during onboarding: 0 feels worst. 10 feels best. Do not keep endpoint labels on the normal dial face. |
| Later check-ins | Available from Home. Automatic daily popups are off by default; Ask me each day opts into a dismissible first-open popup. |
| Daily boundary | Use the Circle day beginning at local 06:00. The onboarding answer counts for that day, avoiding an immediate duplicate prompt. |
| Finish | Show Creating your Circle... while actual setup finishes saving, then open Home. |

Public registration does not grant paid Athena access. No new consent wording,
membership entitlement, provider integration or evidence-retrieval system is
implemented by this plan.

## Screen sequence and copy

Numbers describe the reviewed order, not a fixed page count. Experience entry
can repeat; relevant detail screens branch; the priority question appears when
there are several wanted changes. Each question remains its own screen.

| Screen | Heading or question | Content and result |
| --- | --- | --- |
| 1 | Start your Circle. | Email, password and repeat password; Create account. Existing users can choose Sign in. Public signup is a target, not current functionality. |
| 2 | Check your email. | Show the supplied email; support resending and changing it. Verified entry continues to Name. Exact expired-link/error recovery still needs implementation review. |
| 3 | What should we call you? | One required name field, accepting the name or nickname they choose; Continue. Reuse the account display-name concept. |
| 4 | When were you born? | Vertical Day, Month and Year wheels; Continue. |
| 5 | What do you do these days? | Multiple-choice, multiple selections; Continue. |
| 6 | Which fits you right now? | A separate life-situation question; Continue. |
| 7 | What have you tried or done? | Select a past-effort category. |
| 8 | What did you do? | Supply a short description for this experience. |
| 9 | Are you still doing it? | Still doing it, Finished or Stopped. After saving the entry, offer Add another experience or Continue; another entry returns to experience selection. |
| 10 | What would you like to change? | Multiple selections; Continue. |
| 11, conditional | Relevant detail question | Ask only where needed to make the Home direction useful; proposed branches below. |
| 12, conditional | Which matters most right now? | Choose among the supplied wanted changes when several were selected. |
| 13 | When do you usually wake up? | Required time; Continue. Proposed support: Choose your usual time. Your best estimate is fine. |
| 14 | When do you usually go to bed? | Required time; Continue. No My times change option. |
| 15 | Your usual day. | Read-only preview of the actual Log layout using their times; Continue. Proposed support: You can change these times later. |
| 16 | Start a habit or keep one? | Start a new habit or Keep a habit I already do. |
| 17, new habit | What would you like to start? | Suggestions or Write My Own. Selecting a suggestion supplies the habit wording directly. |
| 17, existing habit | What do you want to keep doing? | Enter the habit in their own words. |
| 18 | When will you do it? | After I wake up, After lunch, Before bed, Another time. The custom field uses When? with an example such as After I get home. |
| 19 | Your daily habit | Show the exact habit and cue, with Every day. Allow return to edit. Create habit confirms one record. |
| 20 | Your Habit page | Actual Habit layout, showing the created daily habit unchecked. Read-only, with no explanatory sentence. Continue to the feeling question. |
| 21 | How do you feel right now? | Required circular 0-10 dial. Explain the scale once. An unanswered state is not a saved midpoint. |
| 22 | Creating your Circle... | A real save/finalization state. Open Home after successful local setup. Retain answers and offer Try again if saving fails. |
| Destination | Home | Present reported experiences, current wanted change and the habit as separate information. The exact main visual remains open. |

The earlier proposed habit-detail screen, What will you do each day?, is
removed. Generic suggestions are accepted as the selected habit wording;
optional later edits happen in the main Habit page. Do not reintroduce that
question as an automatic follow-up to Practise a skill.

The final protected completion interaction still needs placement review: the
Habit preview now precedes another question, so its earlier proposed terminal
swipe cannot silently finish onboarding. See the compatibility section below.

## Response choices retained for wording review

The developer confirmed the structure and the explicit changes above. The
following response sets are the concrete copy discussed in chat; exact control
behavior and any further copy changes remain review work before implementation.

### Current situation

Choose all that fit:

- Studying
- Working for someone
- Working for myself
- Looking for work
- Taking care of home or family
- Not working or studying right now
- Something else

Do not ask for school, employer or job title automatically. Handling overlapping
and contradictory selections, and the Something else field, needs review.

### Life right now

Proposed single choice:

- Finding out what interests me
- Deciding what to do next
- Working toward something I want
- Starting again
- Feeling stuck
- I'm not sure yet

These are descriptions of the person's current situation, not permanent traits.

### Past effort

- School or study
- Learning a skill
- Work or a business
- Making something
- Health or exercise
- Helping or caring for someone
- Something else
- Nothing comes to mind yet

For each supplied experience, retain the person's description and its selected
status. A stopped attempt remains an attempt; a finished project does not prove
a current habit. No experience-date question is included in the reviewed flow.
Do not invent dates, order or duration to fill a historical chart.

Nothing comes to mind yet was proposed as an honest answer, rather than a Skip
action or a mandatory achievement. Its exact representation and route past the
experience-detail screens remain open. Do not resolve this by fabricating an
experience or forcing the person to claim an achievement.

### Wanted Change

- Find work or change jobs
- Find a direction
- Learn or get better at something
- Take better care of myself
- Improve my relationships
- Work toward something
- Something else
- I'm not sure yet

Proposed useful follow-ups:

| Choice | Question |
| --- | --- |
| Learn or get better at something | What would you like to learn? |
| Work toward something | What would you like to work toward? |
| Something else | What would you like to change? |

Other choices can stand on their own. An unsure answer does not produce an
invented direction. Exact handling of unsure alongside concrete selections and
the primary-focus choice remains review work.

### New-habit suggestions

- Read one page
- Take a short walk
- Do a few push-ups
- Practise a skill
- Write My Own

Suggestions are choices, not assigned commitments. The person confirms one
habit with its cue. These choices are not restricted to the wanted change.
Personalized suggestion selection has not been specified or implemented.

## Preview and feeling behavior

Log and Habit previews should use their actual app layouts, populated from
the person's setup. They introduce the tools through recognition. They are
read-only: interacting with a preview does not record activity or complete a
habit. Usual wake-up and bedtime are setup information, not actual sleep records.
The early-bird/night-owl personality response is replaced by the Log preview.

The feeling interaction is a circular drag control with the chosen number in
its center. Proposed visual details are an Orange filled arc, whole-number
steps, and a small bottom gap separating 0 from 10 to avoid accidental wrap.
Exact arc geometry, finger/keyboard interaction and accessible alternatives
remain to be reviewed and verified. Preserve the Circle palette, Geist and
comfortable touch targets; no new visual assets are approved here.

The agreed daily direction is:

- Onboarding requires the initial answer and explains the scale once.
- Afterward, Home has a How do you feel right now? entry that opens the dial.
- Home shows today's saved value after an answer.
- Ask me each day is off by default. Opting in enables a dismissible popup on
  first open of a new Circle day, not a mandatory daily barrier.
- The onboarding answer counts for its actual Circle day. Do not prompt again
  immediately on reaching Home.

The value describes that check-in moment. It is not a day-long verdict, a life
score or proof of progress toward a goal. Missing check-ins are not evidence of
feeling bad. Popup dismissal/re-prompt rules, correction/history, opt-in control
placement, timezone changes and same-account multi-device coordination remain
open. Automatic daily prompts are not enabled merely by completing onboarding.

## Evidence, ownership and compatibility

The implementation must distinguish account identity, self-reported background,
experiences, wanted changes, usual times, habit commitments and feeling answers.
They have different meanings even if supplied in one journey. Exact records,
schemas, identifiers and sync operations have not been selected by this document.

Preserve these requirements when preparing the implementation proposal:

- Account-scoped local recovery and resumable progress; no account crossover.
- Keep source wording and actual recording time separate from any reported
  historical date. Unknown historical dates stay unknown.
- Save birthday as a date rather than a permanently stored age. Validate actual
  calendar dates, including leap years; do not accept a future birth date or
  silently save an untouched default. Age eligibility/ranges still need review.
- Confirm one durable daily habit. A suggestion, draft, preview or history view
  must not create another habit or mark one done. Retries, reloads and interrupted
  setup must recover the same confirmation and record.
- Keep created commitments separate from statements that the person already
  did something. Do not backfill completions for an existing reported habit.
- Keep phone evidence until exact server acknowledgement; preserve explicit
  dated clearing/deletion semantics and later edits. Do not activate sync or
  migrate real records through this documentation task.
- Define correction, deletion and current Home projections without rewriting
  immutable old chapter versions, answers or readings.
- Preserve completed users' access and unfinished older runs. How existing users
  can choose supplemental onboarding still needs review; do not reset them.
- Use the existing App Box, Page, editing, gesture and domain engines. Any new
  publication needs an immutable version. Do not change day-one@1, @2 or @3.
- Keep the Page standard's protected terminal behavior unless the developer
  reviews a replacement. Review where its separate completion Page belongs after
  the new feeling question. The Creating state is not a replacement ending engine.
- Onboarding, confirmations, visits and feeling saves make no Athena request.
  Future authorized Athena use must distinguish wishes, self-report, current
  commitments, recorded actions and inference. Drafts remain excluded.

The current account flow is invitation-based; public self-registration is not
implemented. V3 does not create commitments. Habit/setup data is account-local;
writing sync is a separate off-by-default system. This design does not establish
general lifestyle sync, live personalized Athena, a new Home route or a new
progress visualization.

## Remaining implementation review

The active product, roadmap, decisions and architecture now align to this
replacement target. The older optional-action/explicit-skip plan is historical;
it must not drive the new implementation unchanged.

Remaining choices are exact uncertain-answer routes, suggestion/custom-field
validation, email/link recovery, birthday eligibility, existing-user discovery
and transition, owner/revision/history/deletion/sync contracts, final protected
completion placement, feeling corrections and multi-device popup handling.
Existing users and unfinished old runs must not be reset by an assumed migration.

Home's exact main visual/data mapping remains open. Reported experiences can
support recognition without a worth/willpower score, invented chronology or
life-completed percentage. Do not derive a chart merely from documented intake.
The initial required feeling and later opt-in daily popup supersede older
unconditional first-open daily-feeling proposals.

Keep record/history and safe-sync prerequisites before implementation and beta
readiness. Signup target, release audience/rollout and paid Athena access are
separate decisions.

## Verification and next action

No runtime verification is claimed by this specification. Before code, review
the remaining contracts and exact source/publication/configuration/test scope.

Future checks must cover signup/verification recovery, multi-select branching,
repeated experiences, dates, interruption/offline resume, account isolation,
one-time habit creation, truthful read-only previews, retained old runs/access,
the 06:00 boundary and no AI request on save/completion. Measure affected frames
and verify dial touch/keyboard behavior and optional prompting on target devices.

Next: settle the blocking compatibility/record/Home choices for a bounded
implementation proposal. The planned flow is settled direction; the open details
are not reasons to restore the old optional-action onboarding.
