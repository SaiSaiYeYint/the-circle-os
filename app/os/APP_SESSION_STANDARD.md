# Circle OS App Box and Page Standard

Updated: 2026-11-11, Asia/Bangkok. This owns Page structure, gestures, navigation,
motion and immutable session behavior. [Design](../../DESIGN.md) owns visual
values; [Product](../../docs/PRODUCT.md) owns meaning. The earlier trials and
their measurements are [historical](../../docs/archive/2026-11-11-doc-cleanup/APP_SESSION_STANDARD.md).

## Shared tool interaction contract - 2026-11-11

Applies to the six opened tools and every supporting History, Trash, Record,
phase, detail, correction, confirmation and writing-sync view.

| Interaction | Shared rule |
| --- | --- |
| Header reflection | RoutineHeaderButton; immediate 240ms light inside letters; no action wait |
| Structural growth/shrink | SwipeSession; 600ms, cubic-bezier(0.42, 0, 0.28, 1); typing follows directly |
| Supporting-view side change | useAppBack; 260ms leave, 600ms measured resize, 1000ms complete handoff, shared 500ms arrival |
| Ordinary Page swipe | Existing shared gesture/settle engine; no feature timer or repeated new-content reveal |
| Task/Week goal completion | Save directly; text and checkbox respond together, release row after 300ms |
| Habit result | Existing 300ms entrance/exit, 600ms settling; no overlapping wording |
| Glass press/release | Shared 150ms/400ms |
| Creation/clear | Existing 500ms reveal after 100ms lead / 300ms clear |
| Preferences | Reduced motion: direct endpoints; reduced transparency: no glass/artwork; forced colors: readable and announced state |

All six tools and supporting views use Design's 24px anchors, shared full-page
floor and natural growth. No checkbox-first or three-second goal delay remains.
Completion faces share the Orange glass rim/liquid and immediate white Log ✓.
Protocol uses a separate checkbox; passive kept words fill Orange in the same
300ms liquid response without striking through. Word taps perform no action.
Do not flatten Protocol editing, next-day agreement or authored day-seal behavior
into ordinary task completion.

Reuse existing Page, header, gesture, button and App-back engines. Retire
unreachable branches/unused selectors when an approved change supersedes them.
Keep meaningful behavioral tests; run the compiled-CSS tool-consistency matrix,
affected journeys and intermediate-motion checks for later visual/interaction work.

## Terms and Page anatomy

- **App Box:** stable frame owning background, border, radius, clipping, shadow,
  minimum size and height transition.
- **Page:** a visual sheet within that frame, never a second outer card.
- **Session:** selected Page, position/progress and permitted navigation.
- **Cover:** non-editable opening hook with optional supporting words and cue.
- **Journey:** questions/teaching/setup with saved draft answers and a deliberate end.
- **Library:** existing readable Pages with retained selection.
- **Line:** content that gives and collects no answer; no Chapter/run lifecycle.
- **Edition:** a dated immutable authored Athena reading.

Every Page reuses Header, Heading, Main Body, Sub Body and Footer.
Cover Header is empty; Chapter Header has right-side progress only. Main/Sub
carry roughly two-to-one visual weight, not compulsory empty tracks. An absent
Sub Body costs no space. Content begins at the shared forehead anchor and grows
downward as lines are added; it never recentres according to text length.

An App Label that is a button resets native button additions without restating
role typography. Header wording aligns to the header line, not the centre of
its invisible 44px target. Shared label line-height and gap tokens own alignment.
Do not add a second heading spacer or feature-specific minimum.

## App Box size

There are two existing contexts, not competing global height rules:

- The six **opened full-page tools** share the focused viewport/safe-area-aware
  minimum, natural downward growth and Design's 24px content anchor. Their
  supporting views do not reinstate compact 480px/60dvh inner scrolling.
- **Other compact/chapter/reading contexts** retain the existing shared default
  minimum and context tokens. Empty and short Pages rest equally within that
  context. Real content may grow downward; optional empty space does not.

The full-page adoption does not globally restyle Reflect, chapter players,
legacy surfaces or previews. Measure deliberate replacements and unchanged
contexts separately. A fixed-height reading/chart session may keep its existing
scroll owner; do not turn a fluid tool into a nested scroll panel.

The outer frame stays in place during swipes and resize. Only its content moves.
A swipe settles before state changes; hold old height through travel, then use
the shared measured resize. Never expose a gap, flash or duplicate rounded face.

## Interaction

- A tap never becomes a swipe; swiping never focuses a text field.
- Every swipe has a button or keyboard path.
- Keep the active Page in the navigation map as access/progress changes; never
  silently fall back by array position.
- Required first-use covers have a hard right boundary. An optional Check-in
  cover may swipe right to its idle app as Later.
- Incoming content is promoted in place; its entrance does not replay at commit.
- Side changes use useAppBack; features supply content, not competing timers/classes.
- Existing Page travel remains quick. Only a genuinely new cover stages arrival.
  Its surface precedes words and travel stays locked until that reveal finishes.
- Refresh arrives Body, Header, Footer. Background never blinks/remounts.
  Labels have no separate late arrival. Saving does not empty/replay the box.
- The existing lifted-key recipe remains for contexts that use it; opened-tool
  glass/completion controls use the shared current contract above. Button Studio
  variants never silently replace product defaults.

AppPagePlacement declares balanced, identity-stack or content-flow. Reuse the
shared placement rather than borrowing another feature's selector.

## Journeys and completion

An open Journey keeps answers editable by backward travel until confirmation.
Right-swipe-back remains the developer's chosen behavior. Progress is shown
only when there is more than one Page to count.

Every Result/Confirm has the same protected ending: forward travel is closed
for 1.2 seconds, backward travel stays open, then Swipe when ready appears.
One deliberate forward swipe reaches Idle or returns the App. It never dismisses
itself. Reduced motion removes decorative arrival, not the accidental-swipe guard.

Published dwell/swipe declarations still validate immutable anatomy/destination;
they do not create different terminal gestures. Unknown/conflicting endings fail
the build; session names never select an ending. The new onboarding's final
terminal placement still requires review against its longer screen sequence.

Published id@version content is immutable. New wording requires a new version;
unfinished old runs and completed answer readers retain their original definition.
Current Day One is to be replaced through the planned onboarding, not edited in place.

## Navigation and entry

- Four roots: /os/home, /os (Today), /os/mirror (Reflect), /os/explore.
  Bottom navigation persists in tools under its current keyboard behavior.
  Home/Explore intentionally contain no placeholder content.
- Opened pairs are Note/Deep Thoughts, Routine/Protocol and Log/Week.
  Manual swipes and tappable cues use the shared session engine.
- After any completed Day One, enter directly. Week/Log setup, weekly review
  and daily greeting do not interrupt entry. A genuinely unfinished Day One
  may appear. A newer version alone does not interrupt an older completion.
- Planned onboarding ends at Home. Existing-user transition and replacement
  delivery need review; this documentation does not change entry behavior.

## Idle rotation

Opened full-page tools stay on the selected Page: the writing session is paused
while opened, and histories, libraries, journeys and pending publications never
rotate. This is the current focused-tool behavior.

The retained legacy Today Note/Thoughts check-in policy permits one
IDLE_PAGE_DWELL_MS dwell (30 seconds) between its pages when that context is
actually available. Two-page fact/joke Lines may turn between setup/reveal.
Do not apply that legacy permission to the manually opened tools.

Any permitted dwell restarts on touch/key, waits for focus or unfinished writing,
and stops in the background. It uses ordinary Page travel, never a new-content
reveal. A Line never dismisses itself on a timer.

## Writing and Lines

Note autosaves silently with recoverable buffers; Deep Thoughts uses
Send/Save changes and deliberate Next question. History/Trash/Restore/Delete
and conflict-copy review keep the same frame and shared navigation.
[Product](../../docs/PRODUCT.md#current-daily-tools) owns their action semantics;
the [record contract](../../docs/PERSONAL_RECORDS_AND_ATHENA_PLAN.md) owns data.

Line access from Note is currently hidden; content and immutable publications
remain preserved. Deep Thoughts' Quote opens the managed public catalog through
existing Line exits, keeping the same question/draft. Cached valid data supports
offline reading; an authoritative empty catalog has no bundled fallback.

A Line is one-beat content, unrationed, with no run, version, cooldown or
completion. A quote uses one Page; facts/jokes use setup and reveal.
Backward beyond the first Page returns; forward beyond the last first reveals
optional reactions, then returns on reaction or another forward swipe.
Reactions are feedback, never Chapter answers/completion. Preserve the legacy
Note/Line behavior for retained contexts; do not restore its hidden entry.

Automatic writing Sparks are paused. New authoring does not target Note;
existing immutable Note publications and saved progress remain readable.
Public/private publication, cache and delivery use the existing shared engines.

## Routine and Protocol

Routine Record shows today with Undo and read-only older completions in one
view. Saved name, cue and result remain distinct. Missing original wording is
not reconstructed. New habit accepts fields in any order; an action is required
to become an active visible habit. Unnamed work remains a recoverable draft;
leaving hides it and New habit reopens it. Deliberate clear archives saved work.

Protocol shows the running phase, or home when none runs; Phases is its back.
Start phase reuses one draft, not a navigation-created duplicate. Durations
remain 1/3/7/14/21 days. Separate editing changes wording from the next local
06:00 Circle day; old dates keep their original terms. Closing a kept day seals
dated evidence. Ordinary current-day ticks remain editable until the seal.
Keep the authored day-seal reward.

Past phases/terms are read only; no last-day correction editor returns.
Preserve older correction receipts. Past presentation retains outcome, period,
wording and compact counts; it omits the retired days-kept sentence and repeated
term dates. Remove archives only finished/early-ended runs with a newer timestamp;
draft/running phases cannot be archived. Browsing writes no completion.

## Log, Week and histories

Log/Week share a persisted manual pair. Log grows with the natural page scroll;
History and opened day/correction remain inside the daily slot, with outer Week
travel locked while reading a supporting view. History includes saved titles,
activities or moments, not automatically empty days/future plans. Past views use
their original blocks, never today's suggestions.

Past activity/moment text correction preserves ID, attributed day, time range
and first-recorded time. Save changes creates immutable before/after evidence with
actual correction time; unchanged Save writes nothing. Stale edits are rejected.
Clearing writes a dated empty value and removes active evidence without stale
restoration. Cancel writes nothing; reload/account changes close unsaved editors.
New past entries and time/date changes remain separately reviewed work.

Week goals and Routine steps share records. Day tabs filter steps, not open
goals. Current task creation is today/future only. History groups by event day,
then goal; old calendar weeks/reviews remain available separately.
Completed reviews stay read only. Browsing never replays next-week/Protocol
outcomes or manufactures answers. Missing links/old wording stay unavailable.

## Reflect, declarations and editions

The existing Reflect meaning is wanted life, actual life and the space between;
Athena is not a fourth part. Its saved replacement proposal remains deferred.
Chapters collect answers through existing delivery paths; do not add an
unreviewed Reflect questionnaire or direct-discovery editor.

Vision, Character, Mission, Typical Tuesday and Six months are distinct records.
Character is authoritative; Routine identity then Mission are labelled fallbacks.
Current visible Vision fronts remain Vision/Mission/Typical Tuesday.
Only Save declaration creates a version; blur/reload/typing do not. History
uses the shared App-back and never borrows newer wording.

Current Athena keeps its four-Page reading. The cover label opens read-only
History in the cover slot, not a fifth swipe Page. History locks outer travel,
lists retained editions newest first and opens only that edition's prose.
Missing parts stay missing. Back returns via History to the cover.
No reply editor or publication side effect runs in an archive.

An edition is dated/immutable and identified by authored prose, not preparation
date. Same prose publishes nothing; derived observations are display fallback
only. Editions merge by union. Current browser retention is 60 editions; vault
history is a legacy integration, not proof of Supabase archive/paging.

Only the latest prepared Reading can accept its current answer-as-evidence.
That save makes no AI call. Planned paid replies need a separate explicit request;
requested results appear when ready. Preserve existing prepared content until
separately migrated.

## Chapter History, Quests and publications

Finished Quest steps open the shared read-only answer reader. A completed Quest
offers View history; unfinished Quests keep View steps / Hide steps.
No version badge is needed in UI; original version references remain internal.

Use saved question/display snapshots first, otherwise only the exact original
version. Missing/conflicting definitions never borrow newer questions; keep
answers with truthful unavailable markers and unknown dates.

A named active Habit, saved Log wake/sleep pair, matching completed first-use
publication or corresponding declaration can satisfy its own setup step.
Already set up is derived UI status, never fabricated answers or a completed run.
App access alone satisfies nothing; ordinary reflections and Week reviews need
their own runs. Suppress duplicate setup offers/clear stale pins without replay.

A publication names one app, audience, visibility, delivery mode, source and
time. Changing destination/audience creates another immutable publication
version. Private publication stays browser/profile scoped; public publication
uses immutable server sources cached locally and needs explicit approval.
Admin defaults manual, Athena on-view. Pending delivery occupies the whole
App Box and restores normal content on completion/dismissal; it is not another
rotating writing face. Library position uses session/data version; Journey
progress uses chapter/version.

## Admin previews and access

Workshop and Button Studio use production Page anatomy and parent-bounded width.
Choice rows stack full-width. Button Studio keeps its preview action mounted;
Background changes the preview surface, not button lifecycle.

Admin has no public tab/login link. The reserved phrase in Deep Thoughts opens
only the password prompt; only a server-checked password unlocks the session.
Phrase/password are intercepted before persistence. Missing/invalid server
configuration stays locked; unauthorized direct visits return to Today.
Library group order is Foundation, Short, Guided Learning, Reflection, Information;
hide empty groups. Matching preview versions restore position; a new one starts
at page zero. No preview metadata calls an AI provider.
