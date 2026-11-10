> Historical snapshot preserved on 2026-11-11 before the approved documentation cleanup.
> This records earlier decisions, proposals and verification; it is not current instruction.
> Start with the [active document map](../../../README.md#project-documents) and
> [archive index](README.md) for the current replacement.

# Circle OS App Box and Page Standard

## Shared tool interaction contract - 2026-11-11

The [shared tool contract](DESIGN.md#shared-tool-contract---2026-11-11)
governs all six tools and their supporting views. It supersedes the dated
24/48px, normal/bold Header and checkbox-first exceptions below. Preserve
domain actions and records while reusing the same Page, header, gesture,
button and App-back engines.

| Interaction | Shared rule for the six opened tools |
| --- | --- |
| Header reflection | RoutineHeaderButton; immediate 240ms light inside letters, backward/forward direction; no action wait |
| Structural growth / shrink | SwipeSession; 600ms, cubic-bezier(0.42, 0, 0.28, 1); typing follows directly |
| Supporting-view side change | useAppBack; 260ms leave, 600ms measured resize, 1000ms complete handoff; shared 500ms arrival |
| Ordinary page swipe | Existing shared gesture/settle engine; no feature-specific timer or repeated new-content ceremony |
| Task / Week goal completion | Save directly, start text fade with checkbox response, release row after 300ms; no checkbox-first or three-second dwell |
| Habit result | Existing 300ms entrance/exit and 600ms settling; no overlapping words |
| Glass press / release | Shared 150ms / 400ms |
| Creation / clear | Existing 500ms reveal after 100ms lead / 300ms clear where list rows enter or leave |
| Preferences | Reduced motion uses direct endpoints; reduced transparency removes glass/artwork; forced colors retain announced states |

The shared CSS root for opened Note/Routine/Log owns the contract for both
members of each pair and every supporting view. Supporting-view headers use
the same 16px/700 control and 24px content anchor. Completion rims/fills use the
same glass material and 28/22px dimensions: Orange border, 2px Ink gap,
Orange liquid rising over the shared 300ms text response, and an immediate
white 16px/400 Geist ✓ matching Log's save mark. Routine, Record, Week,
Protocol, Dreamline completion and native admin checkboxes share the face.
Protocol keeps its term action semantics. Reduced motion uses direct endpoints.
Other app contexts retain existing defaults. No idle policy, publication,
chapter version, data or release rule changes here.

Retire unreachable branches, unused callbacks/selectors and obsolete source
assertions when they contradict this contract. Keep behavioral model tests;
verify rendered pages and intermediate frames in tests/writing.browser.mjs.
All future work on these tools must run the cross-page matrix in addition to
the affected journey. Dated sections below are historical where superseded.

## Week corrected action anchors and header - 2026-11-10

Approved corrected Week columns: goal cross/Add goal plus at 24px; goal
wording/Add goal label and task cross/Add step plus at 44px; task wording/Add
step label at 64px. Task text is regular 18px; goal text stays bold 18px.
Week Header wording matches Routine's actual bold 16px treatment, and Week's
Header-to-heading gap becomes 24px. Existing frame floors/edge anchors stay.
Day's Record has no Open Log action; the bottom-left Log cue stays. Existing
24px group, 12px goal/task and 8px task/add gaps, filters and motion remain.
This supersedes the earlier add-control columns, task weight and Week forehead.

## Week indentation follows Routine - 2026-11-10

Approved Week rows now indent tasks 20px: task clear glyphs align with goal
wording, and task wording/Add step share the next text column. Add goal starts
at goal wording. Goal groups are separated by 24px; task/add gaps are 8px and
goal-to-task gap remains 12px. Use Routine's Geist 18px/700 task wording and
16px/400 add controls. Preserve the right completion column, 44px hit areas,
folding, day filtering, persistence, completion motion and shared frame engines.
This supersedes the preceding Week row spacing and common left copy column.

## Week compact rhythm and folded records - 2026-11-10

Keep Week’s cross controls on goal/task rows, matching Routine at the left 24px anchor; the day record has no removal crosses. Goal disclosures follow their wording and both goal/task checkbox rims share the right 24px anchor. Task rows are retained during a checkbox-first 300ms response, then use the shared Routine task handler’s 300ms text fade before release. The data write remains immediate and reduced motion stays direct. Day’s Record is a native folded section, reset folded when another day is selected. Its activities retain the main/moment hierarchy and Circle-hour order. History’s event-day and nested-goal disclosures start folded; older calendar-week access is separately folded. The Log swipe cue, manual rail ownership and shared frame/forehead contract remain unchanged.

## Day-filtered Week refinement - 2026-11-10

Every open weekly goal appears on every day tab. Its Orange downward arrowhead is the sole collapse marker beside the title; disclosure starts closed and never opens merely because a goal is added or edited. Expanded tasks are filtered to the selected day and disappear from both Week and Routine on completion/removal. Add task uses the selected tab and is unavailable on past days. No row date picker or step/date summary remains. History holds completed/removed goals and tasks with Circle-day labels; Day’s record omits redundant day/date/title fields. Keep manual rail/swipe ownership and the bottom-left tappable Log cue.

## Week goals and lived records - 2026-11-10

Week now uses the approved goal-led overview: week range, a scrollable dated
rail, foldable goals with all their steps, the selected day's Log record and
folded completed goals. Date selection changes view state; it does not assign
goals to a different week or imply that a Log entry served a goal. Step dates
use the same Routine task link and can move within the goal's week. Checking
a step and completing the goal remain separate actions. A completed goal can
be reopened from the current Week without waiting for History.

Keep the shared manual Log/Week SwipeSession. The tappable reverse Log cue is
bottom left at the 24px visible anchor, with a 44px minimum target. Rail gestures
belong to the rail and cannot turn the Page. Past selected-day Log views reuse
LogHistoryPage and shared App-back inside the Week slot; Week returns preserve
the selected date. Existing History and Sunday chapter entry remain deliberate
and read-only browsing never replays outcomes. Review/Protocol behavior is not
redesigned in this slice. Week follows the existing full-page frame and shared
type roles; its approved checked circles use Orange fill without a tick.
See [checks](../../USER_JOURNEY_TESTING.md#week-goals-and-lived-records---2026-11-10).

## Log fixes and Week goal hierarchy - 2026-11-10

Log and Week use Geist at 28px headings, 18px primary/body, 16px secondary/controls and 12px metadata, with only 400/700. Main activities and goals are bold 18px; moments and steps normal 18px; hours normal 16px except bold Orange current hour. History is regular 16px, explicitly superseding the earlier bold Header rule for these two Pages. Reading/editing/placeholders share role metrics.

An empty-hour plus opens its main activity; once a main activity exists, plus adds a smaller moment. Saved main activity stays in the hour's first grid row, with moments below. Week starts with day/date/tabs; This week's goals follows. Each goal appears once with its completion control and selected-day steps below. Spacing replaces dividers; Add Step/Add Goal precede The day and the Log return cue. Linked Tasks, existing completion/Undo, dates and read-only History retain their domain behavior.

## Log and Week controls approved - 2026-11-10

Log uses bold Orange current-hour text, one top-right History action and no Now shortcut. Empty-hour prompts read Add activity only at the current hour; saved/suggested activities stay readable and all hours remain editable. Visible plus/save marks meet the 24px right anchor while retaining 44px targets.

Week has top-right History, a bottom-left Log return cue, borderless day planning and aligned step rows. Add Step appears only with an existing goal; Add Goal sits after day planning/day tabs and before The day. Both use the shared glass action dimensions. The day count says N written. Existing completion/Undo, linked tasks, dates, History and Sunday review remain.

This approved refinement supersedes the earlier History/Now header and Week
header/step-placement rules. No record model or persistence change.

## Quiet Log controls and Week checkbox trial - 2026-11-10

Log hour rows use spacing without rules. Current hour text is Orange, with a
screen-reader prefix/aria-current=time replacing the arrow. Both Add hour glass
actions retain their original range-expansion handlers and hour-specific names.
Activity, new-moment and edited-moment save controls are transparent Orange
16px ticks in 44px targets. Saving, dates and 06:00 ordering are unchanged.

Week's approved checkbox-only trial preserves its existing 30px Orange-rim
circle, Ink checked fill and warm Bone tick, adding a reflection/inset depth
and 8px blur. Fill and tick opacity/0.85-to-1 expansion use a reversible 300ms
CSS response on the existing aria-pressed state. No extra action or persistence
timer is added. Restored arrivals do not replay the response. Reduced motion
is direct; reduced transparency and forced colors retain readable opaque/system
states. Existing goal departure and linked-step/Task behavior remain. Week's
full redesign and Routine's own checkbox treatment are separate scopes.

## Full-page Log and left Note cue - 2026-11-10

The approved Log entry opens #log in the existing Log/Week SwipeSession. The
closed timeline remains mounted, invisible/inert and clipped so it cannot add
blank Today scrolling. Opening selects the daily timeline; reload retains the
persisted Log/Week index. Root Today navigation exits the focused tool.
History/Now replace the daily Header's old Log/Now labels, using shared header
reflection controls. Now remains top right. The Week footer cue uses the same
index action as gestures; History/day/editor retain their existing contextual
returns and lock outer swiping. The shared focused floor, glass, 48px forehead,
24px anchors and natural downward growth apply to Log and its supporting views.
Keep original record dates, timestamps, identities, correction snapshots and
stale-edit rejection. Week retains its current content/control design.

Deep Thoughts' Note cue is now left aligned, retaining its shared action gap,
44px target and backward travel. This supersedes its previous right alignment.

## Deep Thoughts and writing-pair cues - 2026-11-10

The approved Deep Thoughts adoption uses the same full-page glass and natural
growth as Note, including its History/Trash views. Header controls are Quote and
History; Note keeps Back and History. Quote reuses the existing quote-side flip,
boundary swipes, reactions and same-question/draft return.

Both writing editor Footers use RoutineSwipeCue after their primary action:
Deep Thoughts forward from Note, Note backward from Deep Thoughts. The cues are
right aligned and call the same index action as SwipeSession gestures, retaining
existing travel, records and focused-tool idle pause. History/Trash have their
existing contextual returns rather than an editor-pair cue. Today offers both
writing entries; #thoughts opens/reloads Deep Thoughts while #note opens Note.
Root Today navigation exits either focused URL.

Use --os-tool-section-gap (40px) for New habit-to-Tasks, Add task-to-cue and
writing-action-to-cue spacing. Hit areas stay at least 44px; their invisible
upper area enters the gap, with a 2px static optical shift matching Geist's
heading/cue ink. Short Routine content now follows this exact gap with spare
minimum-frame room below its cue, replacing its fixed bottom inset. Writing's
action/cue group remains at the bottom. No shared timing, floor, forehead,
publication, persistence or question-budget policy changes.

## Automatic writing Sparks paused - 2026-11-10

Filter Spark-kind publications from automatic Note/Thoughts delivery before
both scheduling and direct on-view selection. Keep published definitions and
saved runs intact, including unfinished runs. Note's writing engine, Deep
Thoughts questions, manually opened chapters and required onboarding remain.
The shell's SHOW_WRITING_SPARKS flag owns this temporary presentation pause.

## Bottom navigation - 2026-11-10

Refinement: shared panel glass and matching frame edges make the bar and App Box
a pair. At rest keep a 16px vertical gap, 24px phone gutters and bottom inset
(plus safe area). The shared focused minimum reserves navigation space using
the tool's document-layout top, retaining the 344px floor and natural long-content
growth. This supersedes the fixed viewport-minus-180px rule below. Note's outer
8px check-in padding is removed while opened; internal content anchors remain.
Use the existing shell measurement helper; ignore temporary route transforms
when measuring layout. Joining/merging animation remains an unimplemented idea.

The approved global bottom bar replaces the temporary Today/Reflect top switch
and supersedes its hiding inside tools. Home and Explore are empty destinations;
Today retains /os and Reflect retains /os/mirror. Home uses /os/home; Explore
uses /os/explore. Selecting Today from an opened Today tool returns to its root.
Use existing routing, Back and saved-writing engines. Root selection writes no
personal evidence. Keep the bar outside route transitions, visible inside tools,
with reachable Footer content and safe-area clearance. Hide it while a focused
editor and shrunken visual viewport indicate an open keyboard; return on closing.
Tool floors, foreheads and local manual swipe relationships remain unchanged.

## Current interaction and motion standard - 2026-11-10

The current appearance reference is DESIGN.md's “Current app visual standard”.
The approved Slim actions use 52px height/12px corners; Routine Back and Record
use Geist 16px/700 with their existing text-clipped reflections. Older 64px
faces and normal-weight Back/Record below are historical trial specifications.
Other pages adopt this family in later reviewed slices, preserving behavior.

| Interaction | Standard / owner |
| --- | --- |
| Page travel and swipe settle | Existing shared gesture engine in app-session.tsx; follow the finger, keep ordinary travel quick; no feature-specific substitute |
| General frame growth | Opened tools share 600ms growth; typing follows directly. Other contexts retain the shared 260ms default |
| App front/back change | Opened tools: 260ms leave, 600ms measured resize, 1000ms complete handoff; other contexts retain the 440/840ms defaults |
| Existing page arrival | Shared --os-arrival-ms (180ms); returning pages never replay a new-content ceremony |
| Genuinely new cover/publication | Existing staged Body/Header/Footer reveal; shared engine owns sequencing, not a feature timer |
| Glass action press/release | 150ms press, 400ms release; silver/Orange depth follows the existing press; no action wait |
| Completion response | Shared 300ms; checkbox fill/opacity follows that beat |
| Habit wording | Clean original-face switch; 300ms ease-in result entrance and ease-out exit; no overlapping words, blur or travel |
| Task completion | Words fade immediately over 300ms, then row leaves; no strikethrough or completion dwell |
| Row/frame settling | Hold geometry through the response, then 600ms shared settling |
| New row / clear | 500ms reveal after 100ms lead; 300ms clear fade; persistence saves directly |
| Back/Record light | routine-controls.tsx: one 240ms ease-out reflection inside letters, Back right-to-left and Record left-to-right; activation stays immediate |
| Idle turning | Existing shared 30-second dwell, limited to Today Note/Thoughts and eligible two-part Lines; Routine, Protocol, journeys and pending publications stay chosen |

Reduced motion uses direct endpoints and omits travel, fades and header light.
Reduced transparency removes glass filtering/artwork; forced colors preserve
text and state. Retain existing special sequences such as Protocol's authored
reward and writing recovery until separately reviewed; do not apply a universal
duration to every interaction. Button Studio motion remains experimental.

All future animation work must choose a listed interaction/engine, preserve
cancel/reversal behavior and input availability, and verify actual intermediate
frames plus settled geometry. App Box borders never move with the inner Page.
Changes to shared timing or a named exception require developer review and
affected runtime checks. Existing durations are inventoried here, not changed
globally by this standardization.

## Full-page Note - 2026-11-10

Approved replacement for compact Note: Today shows its entry button, not its
working Page. The opened deck uses the same full-page minimum as Routine and
Protocol, grows down for real content, and has no inner writing/history scroll
panel. This supersedes Note's earlier 480px/60dvh cap only in the opened tool.
The existing shared Page, swipe and App-back engines remain. The deck stays
mounted, invisible and inert on Today, preserving measurement and local recovery.
The Note editor Header has Back/History; Footer has only New Note. Line access
is temporarily hidden by developer request; its content stays intact. Contextual
history returns remain. The external temporary Back remains for
Line/Deep Thoughts. Their own content/control redesign is separate, although the
shared deck keeps one full-page floor through manual travel. No global idle or
other tool migration is implied. Autosave, records and access gates are retained.

## Note visual adoption - 2026-11-10

Account Note and its supporting views adopt the Routine glass family on the
existing compact Page geometry. The account check-in deck owns one stable 36px
frame through Note/Line/Deep Thoughts travel; neighboring content design remains
pending. Note retains its shared minimum, 48px forehead, 480px/60dvh ceiling and
one scrolling Body with fixed Header/Footer.

Note headers reuse RoutineHeaderButton's immediate 240ms text-only reflection.
Its optional reflectionDirection selects backward light for contextual return
labels; Routine's default remains intact. New Note and Restore keep the button
engine, using 52px/12px glass actions and 150ms press/400ms release. Reduced motion
wins over pressed selectors; reduced transparency/forced colors remove filters
and artwork. No idle or full-page sizing policy changes in this slice. See
[measurements and journeys](../../USER_JOURNEY_TESTING.md#note-adopts-the-routine-visual-standard-2026-11-10).

## Routine control trial and visible edge alignment - 2026-11-10

Routine creation faces are 64px high, 24px from both inside frame borders,
with Geist 18px/700 labels. Section gap is 40px. Crosses remain at the 24px
left anchor; row copy retains its approved 20px indent. Visible completion
rims end at the right anchor while 44px hit areas extend into the gutter.
Back/Record text aligns to the same anchors and retains 16px/400.

Header reflections are clipped to letters, run once for 240ms on activation,
and respect reduced motion without gating actions. Back travels right-to-left;
Record travels left-to-right. Tappable Protocol › / ‹ Routine footer cues reuse
manual App switching and the shared Page footer, with Geist 16px/400 and a
4px arrow gap. Forward visible arrow is 24px from inside right/bottom borders.
PageLayout supports optional footerNavigation after existing footer actions;
Pages without it retain their prior structure and geometry. Existing idle,
completion, frame-growth and persistence rules remain.

## Routine button bounds and fade curves - 2026-11-10

Routine creation faces are centered with 48px on each side measured from the
inside frame border (49px including its 1px border). Existing 24px Page padding
plus 24px button margins produce these bounds. Faces remain 48px high; row
anchors, shared frame floors and Page anatomy do not change.

Habit result opacity uses ease-in on check and ease-out on uncheck, each
300ms. These reversed curves replace the earlier ease-out in both directions.
Retain the response hold, 600ms settle, clean original-word switches, reduced
motion and direct restored/editor arrivals; deliberate Undo still animates.

## Matching Habit fade directions - 2026-11-09

Approved: on check, replace the original face cleanly and fade the result in
for 300ms. On uncheck, fade the result out for 300ms before restoring the
original face. Word faces never overlap. Hold row height during either
response, then settle for 600ms. A saved completed arrival or editor return
shows directly; a deliberate Undo after that arrival must still animate.
Reduced-motion responses remain direct. Replace the earlier uncover behavior;
retain Task fading/removal, Undo records, targets, typography and frame floors.

## Habit uncover within the shared response - 2026-11-09

Approved: hold the original Habit words for 100ms, then reveal the result from
top to bottom over 200ms in the same position. Do not crossfade, move, blur or
overlap the word faces. The shared response remains 300ms and the following
frame/row settle remains 600ms. Restored/edit arrivals, undo and reduced motion
remain direct; Tasks keep their current fade/removal and Record Undo.

New habit/Add task labels use the existing bold weight 700 at 16px, keeping
48px faces and current glass/shadows. Back/Record remain at their current 400
weight. No other typography, shared frame floor or Page anatomy changes.

## Shared quiet Habit and Task response - 2026-11-09

Approved completion sequence: a 300ms checkbox response, then 600ms row/frame
settling. Habit words switch sharply at 300ms, with no crossfade or travel;
unchanged words do not pulse. Task words fade immediately for 300ms without
strikethrough, holding their row geometry until departure. No three-second
Task dwell remains. Completion evidence saves at registration; Record retains
Undo. Restored Habit faces and reduced-motion completion remain direct.
Clear controls keep their separate existing 300ms fade. Orange shadows,
geometry, text anchors, other App Pages and storage semantics remain intact.

## Balanced Routine timings and restored control shadows - 2026-11-09

Approved: text crossfade/ordinary check-off pulse and checkbox fill take 700ms;
frame and row height changes take 600ms; clear fades for 300ms after saving
immediately. Record follows the same frame timing. Existing curves, anchors,
row hold through the dissolve, direct typing, new-row reveal and reduced-motion
rules remain. This supersedes earlier 1400/1800/500ms Routine values.

New habit/Add task and Habit/Task checkbox rims, including Record, regain the
faint brand Orange shadow beneath existing glass reflections and Ink edges.
Keep all frame floors, targets, face sizes, insets, spacing and saved evidence.

## Routine controls above panel glass - 2026-11-09

New habit/Add task and Habit/Task checkboxes share stronger glass in Routine
and Record: brighter Bone rims/top reflections, clearer centres, dark lower
edges and sheen over checked Orange. Local 8px blur does not replace the
panel's 24px blur. Preserve all targets, face sizes, insets, spacing and motion.
Reduced transparency uses opaque Charcoal faces without local filters/sheen.
The App Box, threads and Protocol controls retain their current finish.

## Shell-bounded threads and small remove glyph - 2026-11-09

The fixed thread background is clipped to the outer app shell's measured bounds
and radius, fading over the last 16px at its borders. Its sampling position stays
fixed while the shell mask follows scroll/resize and content growth. Artwork
outside the shell is invisible; only the Habits/Record/Protocol glass panel
blurs the covered strands. No App Box layout or Page timing change.

The Orange cross is 8x8px with 1px strokes inside the same 44x44px target.
Cross left edge and text alignment stay; the visual cross-to-copy gap is 12px.
Creation-button edges and completion targets stay. Test mixed lowercase,
uppercase and number-led Habit/Task names. Keep prefixed backdrop-filter before
standard backdrop-filter and verify the production-built styles, not only
editable CSS. Earlier full-viewport escape and 12px glyph rules are superseded.

## Full-viewport thread background - 2026-11-09

Opened Routine/Record/Protocol share one sharp, fixed viewport background.
The existing ribbon runs from the bottom to the right and continues behind
the App Box. Artwork is not softened or clipped/faded at the App Box boundary;
only the glass applies its existing 24px backdrop blur to covered portions.
The App Box scrolls while the background stays fixed. Decorative background
layers receive no pointer events and add no layout space or horizontal scroll.

The layer lives beside the app shell, outside the route capture. Opened-tool
styling releases the named route capture and completed opacity animation fill
so background pixels reach the glass. Close restores the normal route styles
and opaque shell. Frame floors, anchors, gestures, motion timings and saved
records are unchanged. Reduced transparency/forced colors omit the threads.
This supersedes the earlier 4px diffusion and small frame-corner placement.

## Literal Record and compact controls under glass - 2026-11-09

Record renders saved action/cue/identity separately: name/result bold at 18px,
time/location normal at 16px. Omit empty fields. Use completion snapshot parts,
including today's displayed wording, without rewriting them. Text-only legacy
snapshots show original text without parsing or borrowing newer fields. Today's
membership/count/Undo and past read-only rules are unchanged. Keep the shared
App Box floors and 24px Routine/Record anchor.

Editable rows reserve only 20px before copy. A 12px Orange two-stroke cross
aligns to the heading; its 44px target extends left into the 24px gutter and
ends at the copy edge. The visible cross-to-copy gap is 8px, without overlapping
targets. New habit/Add task span from remove-target end to tick-target start.
The shared frame has 24px blur above an outside background thread with 4px
diffusion. Artwork stays stationary under the glass during Page changes.
Reduced-transparency/forced-color fallbacks hide it; data and motion stay intact.

## App-wide type and spacing contract - 2026-11-09

All functional app Pages use Geist with four sizes (28px heading, 18px body/
primary, 16px secondary/control, 12px metadata) and two weights (400 normal,
700 bold). Matching reading/editor fields share roles; placeholders inherit
their field metrics. This supersedes earlier 29px/18px editable-only scope and
intermediate weights, including older reading-only exceptions. Public/brand
editorial surfaces are outside the app scope.

All authored layout margin/padding/gap values use the shared four-pixel token
grid. Main-to-Sub and Body-to-Footer use 24px, App-to-App uses 16px; forehead
remains 48px except Routine front and Record, both 24px. Preserve 44px targets,
existing minimum frames, proportional content growth and measured centering.
Type leading/tracking, borders, gesture coordinates and optical/centering
calculations are separate from layout spacing. See Design for token roles.

Record matches Habits' heading/content metrics and Bone color, with 8px list
gaps, no dimmed text and no row dividers. Record keeps its two-column Undo
layout and read-only past records. Editable Habit/Task rows keep their third
column; the left x glyph-to-copy gap measures 8px inside the 44px clear target.
No history, persistence, motion timing or completion behavior changes.

## Routine field hierarchy and clearing - 2026-11-09

Approved Routine scale: 28px/700 headings, 18px/700 Habit name/result and Task
text, 16px/400 time/location/navigation/creation actions, 12px/400 dates and
support. The existing identity field is the result; no record migration.
Placeholder size/weight/leading matches its field, with shared muted Bone.
Each editable row uses a left Orange x inside a 44px clear target, flexible
copy, and the existing right completion control. Record rows keep two columns.
One click archives a Habit/open Task, retaining dated evidence and a timestamped
archive marker. A completed Task remains completed in Record after its visible
row is cleared. Draft clearing also removes the draft from New habit recovery.
Existing motion, 8px row gaps, Page anchors and minimum frame size remain.

## Unified Routine Record and content scale - 2026-11-09

Approved Routine content uses Tasks' 18px/540, line height 1.3; both section
labels stay 28px/700. Align completion bubbles with the first text line using
that scale. Ordinary check-offs pulse opacity over 1400ms without swapping
words; identity changes dissolve in Bone. Reduced motion and restored arrivals
are direct. Record combines today (with Undo) and read-only dated history.
Back at top left returns to Routine; no right-hand Record label or second
History action. The approved compact follow-up uses 8px Habit/Task inter-row
gaps, with unchanged typography and 44px targets. App-back resize
uses the local 1800ms timing, including its release timer. Shared defaults for
other apps, data boundaries and resting frame geometry remain unchanged.

## Stationary Routine text and matched growth/reduction - 2026-11-09

Approved trial supersedes the blur/Orange-text rules below. Text stays Bone.
Unchanged habit words remain in their existing editable elements. Only an
identity change uses a simultaneous 1400ms crossfade, without blur or travel.
Both faces share font metrics and a top anchor aligned to the checkbox's first
line. The entire copy block must retain its position through completion; a
zero transform on only its child is insufficient verification.

Hold the row during the dissolve, then settle height over 1800ms, measuring
its effective floor so motion lasts the full interval. Restore/edit arrivals
are direct; undo cancels pending shrink. Local frame growth and reduction
both take 1800ms, including small structural deltas. Actual typing follows
the caret directly. Follow an already settling row's geometry without adding
a competing frame animation. Orange checkbox fill takes 1400ms and retains
the existing glass inset/44px target. Reduced motion shows the final state
directly. Other page travel, App Box floors and saved evidence are unchanged.

## Routine blur handover and inset checkbox fill - 2026-11-09

Approved Routine trial supersedes the timings and divider rules below. Use
1200ms local frame/copy growth with a gentle curve. Outgoing habit words blur
and fade over 300ms; completed words start after 220ms and sharpen/fade in over
1000ms, with no upward travel. Completed action/identity is Orange; a retained
location/cue stays quieter in Bone. Name-only and name/cue habits retain their
words on the completed face and have no strikethrough. Editing, undo and direct
completed arrivals remain. Habit/Task lists have 24px clear row spacing and no
dividers. A separate 22px Orange disc fills over 900ms inside the 28px glass
bubble, retaining a 3px inset and unchanged 44px target. Reduced motion removes
blur/travel/delays and shows final states directly. Geometry floors, anchored
headings, shared page travel and saved records are unchanged.

## Slower Routine motion and short reveal leads - 2026-11-09

Approved trial supersedes prior Routine motion values: 750ms identity fade/8px
rise after an 80ms lead, 700ms frame/copy growth, 150ms press, 400ms release
and 350ms Orange fill. New Habit/Task rows fade over 500ms after a 100ms lead.
Controls respond and growth starts immediately. Use the existing App Box
growth engine with a local Routine timing; rapid changes start at the visible
edge and settle at final content size. Focus must not scroll the clipping
frame or shift the heading. Resting geometry, manual page travel and touch
targets stay unchanged. Reduced motion bypasses JavaScript frame growth and
shows rows/text directly. Undo/edit/reload do not replay the creation reveal.

## Routine motion trial - 2026-11-09

Approved opened-Routine trial supersedes only the identity timing/travel below:
450ms fade/8px rise starts immediately on completion. Existing completed
arrivals remain immediate; undo and deliberate editing remain usable. Reduced
motion removes travel and transitions. No row-height or App Box rule changes.
Creation controls press inward 2px with slight compression/softer reflection,
then return over 220ms. The symbol-free completion bubble compresses to 86%
while pressed, returning as Orange fills it. Its 44px hit area stays fixed.
Reuse the shared completion-button lifecycle, including pointer cancellation.

## Habit completion display - 2026-11-08

The developer approved separating completion-control focus from editing.
Only actual field focus or deliberate identity editing opens the habit fields.
After completion, empty optional fields/placeholder strings are not displayed.
Without identity, keep the supplied action and any supplied time/location.
With identity, completion immediately starts a 300ms fade/4px rise alongside
the row height transition, with no dwell, settling gate, blur or second tap.
Undo restores the action. Already completed arrivals do not replay
the reveal. Reduced motion uses no rise and near-zero transition duration.
Existing completion records, snapshots, cue/identity values and undo remain.

The corner artwork now uses twenty-four smooth joined curves forming a small
intertwined ribbon with the approved 7px border-only end fades. Its curves flow
naturally behind buttons; do not steer the bundle around controls.

## Routine front heading exception - 2026-11-08

The developer approved reducing only Routine's front Header-to-content gap to
24px. The first visible content is the 28px/700 Habits heading, followed by
the existing rows. Tasks uses the same semantic level-two heading. Record,
History, Protocol and other Pages retain their 48px gap. Shared minimum size,
24px Page padding, touch targets and action semantics are unchanged.

The later approved finish adds slightly stronger glass reflections, a faint
Orange App Box shadow and twelve irregular crossing strands. A further approved
pass increases the glass to 16px blur and fades the threads only in the final
7px at the bottom/right frame border, with rounded ends; the curves remain
visible elsewhere. Reduced-transparency mode removes blur and thread artwork.

## Approved control and spacing refinement - 2026-11-08

All shared App Pages use 24px padding on each side, with the existing 48px
forehead. Align actual Header text, not just control boxes. Text entry stays
borderless, including focus/new-entry states, with a visible caret; other
controls keep keyboard focus indicators. See Design's standing refinement rules.

Opened Routine/Protocol uses 28px visible bubbles within 44px tap targets and
48px creation buttons with 18px type. Section/list/row gaps are 32px/12px/12px;
the cue gap stays 4px. Twelve close, irregular overlapping strands and a faint
Orange button shadow refine the selected glass direction. Focus is removed
from Record; stored focus values remain. Temporary Today/Reflect navigation is
hidden within these tools pending the separate bottom-navigation task. Past
phase summaries omit days-kept prose and repeated term dates, retaining outcome,
period, term wording and counts. Missing original legacy wording remains
explicitly unavailable. This changes presentation, not saved record semantics.

## Full-page Routine and Protocol - 2026-11-08

The developer approved the bounded Routine/Protocol redesign on the existing
player and domain actions. Within the opened full-page tool, its one glass
frame uses `max(344px, 100dvh - 180px)` as the shared Page minimum, plus the
frame border. The 48px label gap remains the forehead anchor. Routine begins
directly with Habits; an absent identity heading adds no Main-to-Sub gap.
Real rows and Habit/Protocol histories grow with the document, without a small
inner scroll panel. This supersedes the compact/capped rules below only for
these opened tools; writing and other compact App Boxes keep their rules.

Today has separate Routine and Protocol entry controls. Back returns to Today;
the existing swipe player, arrow-key navigation, and a keyboard-focusable
alternate-tool control provide manual switching. No idle rotation is added.
The frame owns the four decorative lower-right strands; text and controls
move inside it. Use the Circle palette and Geist. Completion bubbles have no
symbol; preserve announced state, text treatment and at least 44px targets.

Routine keeps its existing inline fields, identity transition, Record/Undo and
History. The editable Routine focus is reached at Record > Focus. Protocol
keeps its existing draft exit, five durations, start validation, immutable
running duration, next-Circle-day term changes, sealed-day handling, end/remove
confirmations and read-only history. Remove the overall totals row; retain
per-phase summaries, dates, term counts and wording intervals. No records or
legacy identifiers are migrated. Global four-destination navigation remains
outside this slice. See [the design record](PAGE_DESIGNS.md).

## Terms

Approved spacing refinement (2026-11-03): the shared label gap is 48px;
Main-to-Sub and Body-to-Footer gaps are both 25px. These values supersede older
spacing statements and historical 80px measurements below. Preserve the shared
minimum and top anchor. Note/Deep Thoughts Trash detail omits “In Trash” and its
divider, with a 4px Restore-to-Delete layout gap and at least 44px touch targets.

Editable typography refinement (2026-11-03): use 29px main and 18px body text
on Note/Deep Thoughts editors and opened history/trash entries, the embedded
Athena reply editor, Vision declarations, Week goals/steps, and Chapter short/long
text questions with their Workshop preview. List rows keep their compact scale.
Reading-only type, weights and line heights retain their existing rules;
use the shared spacing above. This supersedes shared type-size statements
below for the named editable surfaces.

Latest writing flow (2026-11-03): Note and Deep Thoughts are the Today writing
Pages. Ordinary Thoughts remains a historical kind, without a new composer.
Deep Thoughts shares Note's direct HISTORY, dated rows/times, orange saved-row
bins, silent trashing, Trash/Restore/confirmed Delete forever and bounded Body
scrolling. It keeps Send/Save changes and unsent recovery. The saved answer stays
visible with Next question; source/question links and internal revisions remain.
Deep Thoughts recovers silently, without routine saving/sent, recovered/discarded
messages or a Discard draft control. Clearing the answer clears its recovery text;
save errors remain visible.
No Versions UI or Undo on these account writing surfaces. Its label opens one
managed Quote, returning to the same question/draft through existing Line exits.
Reading answers keep their embedded controls; legacy sources are not migrated.
This supersedes the Note-only sizing exception and Thoughts mode/navigation
descriptions in the dated snapshots below. See [the current contract](PERSONAL_RECORDS_AND_ATHENA_PLAN.md#1412-note-deep-thoughts-and-quotes---2026-11-03).

Latest Note sizing/action refinement (2026-11-03): New Note belongs in the Note
editor Footer. Account Note, History and Trash share a 480px App Box ceiling,
reduced to 60% of the dynamic viewport but never below the shared minimum.
Only Body scrolls beyond that ceiling; Header, Heading and Footer stay visible.
This is a Note-only exception to natural growth below. Trashing a Note is silent.

Later Note controls refinement (2026-11-03): direct HISTORY replaces the ellipsis
and aligns with NOTE. Note saves silently, has borderless focused writing, and
has no Versions UI or Undo. Each local History row carries an orange trash-bin
button; restoration remains in the separate Trash page. Internal revisions stay
for save safety. This supersedes Note controls in the dated snapshots below.

Account Note refinement (2026-11-03): Note autosaves after a short typing pause
and on departure, with automatic local recovery and no Save, Clear, Discard,
Drafts or draft messages. Orange navigation, History/New Note, Versions and
Trash/Restore stay in the shared App Box. Thoughts and reading answers keep
Send and their existing draft workflow. This supersedes Note controls in the
dated connection snapshot below; see the current Note section.

Account writing connection (2026-11-02): Note, Thoughts and reading-answer
editors use the existing Page and App Box. Save/Send accepts writing on this
device before showing success or letting text depart. More opens History,
Drafts and Trash; Versions and deletion confirmation stay inside the same
frame. Reading answers remain embedded in the existing reading Page. History
does not rotate. Header actions keep 44px targets outside the label's layout
flow, so `--os-label-gap` still owns the forehead. Older writing stays read only
pending migration review. See the [runtime evidence](../../USER_JOURNEY_TESTING.md#account-writing-ui-2026-11-02).

- **App Box**: the stable, rounded container. It owns the theme, clipping,
  border, radius, shadow, minimum size, and height transition.
- **Page**: one swipeable visual inside an App Box. Pages never own a second
  outer card.
- **Info Page**: the shared solid-background page template. Gestures, update
  reveals, and head-shake feedback move its text layer while the App Box stays
  still.
- **Cover Page**: an Info Page with a main line, optional sub line, and one
  `Swipe to begin` cue. It is never editable.
- **Note Page**: an editable Info Page with an app action label, main line, and
  optional sub line. It has no swipe cue.
- **Thoughts Page**: an Info Page for free writing with one black Save or Send
  action.
- **Blog Page**: a reading page with title, divider, and short paragraph
  sections. Athena Reading is the reference implementation.
- **App Label**: the small upper-left name shown only when a Page is itself an
  app surface. A non-app Page omits it.

## Page anatomy

Every Cover, Chapter, and App Page uses the same five regions.

1. **Header** stays at the top.
   - App Page: left App Label; optional right app action.
   - Chapter Page: no left label; right progress only.
   - Cover Page: empty. A Cover never shows an App Label.
2. **Heading** sits below the Header. It may be a small section title or a
   large title. It may be empty without leaving a gap.
3. **Body** stays in the middle and has two parts:
   - **Main Body** receives about two parts of the available body space. It is
     the large bold prompt, primary thought, or main habit.
   - **Sub Body** receives about one part. It holds an optional subtitle,
     typography input, choices, sliders, or added tasks. It may expand without
     shrinking the type.
4. **Footer** stays at the bottom.
   - Cover Page: right-aligned `Swipe to begin` or `Swipe to see` cue.
   - Chapter Page: full-width Continue or Confirm actions, stacked if needed.
   - App Page: the app's lasting action, such as Add task.

## App Box size

- The default App Box is a compact rounded rectangle and the shared minimum
  everywhere. Empty and short Note, Thoughts, Habit, Protocol, Chapter, Cover,
  Vision, Athena and Gap Pages rest at exactly one height. Real content may grow
  the frame downward.
- One foundation owns that size and the space inside it. `--os-app-box-min-height`
  is the height, `--os-app-box-padding-*` the inset,
  `--os-label-gap` the forehead from Label to first visible content,
  `--os-main-sub-gap` the space between Main and Sub, and
  `--os-body-footer-gap` the space between the last line of Body and the Footer.
  An App does not restate any of them.
- Main Body begins at the forehead for every line count. One, two and three
  lines use the ordinary Body budget without changing that top anchor. At four
  lines the App Box grows down by every added line.
- Two lines was not enough. A Note title is usually two lines but the Thoughts
  placeholder is sometimes three, so two Pages of one App Box sat at different
  heights and the frame resized on the swipe between them. The reserve is what
  keeps Pages of one App identical, so it must cover the longest ordinary Page,
  not the shortest.
- A fluid App Box may grow for its content and ease back down, but never below
  the shared default minimum.
- The App Box does not jump when adjacent Pages have different heights.
- An App Box grows downward only. The top edge, width, radius, Header and Main
  forehead anchor stay where they are; the bottom edge is the only edge that
  travels.
- One written line costs one line of App Box. Main and Sub are two real rows
  that take the room they need. Written instead as a two-parts-to-one-part
  split of the Body, an absent Sub Body still claimed half of whatever Main
  took, so every line written added one and a half lines of box and opened a
  growing field of empty colour above the action. The two-to-one proportion
  describes where the eye should land, not a grid that reserves space nobody
  asked for.
- Real added rows may extend a fluid App Box while the Footer remains below
  them. Habit tasks stay visible in one continuous Sub Body; they do not move
  into an inner scrolling panel.
- Draft and running Protocol terms remain visible as the App Box grows downward.
  Expanded Past phases is the approved exception: the frame uses Note's
  480px/60dvh ceiling, never below the shared minimum, with only Body scrolling
  and Header/Footer fixed. Collapsed, empty and short history rests naturally.
- A fluid App Box commits its first measured height only after child editors
  have sized and the font state has settled. It remeasures when fonts finish or
  fail and when an in-Page side changes; the CSS minimum carries first paint.
- Routine declares its editable identity as Main text, so it begins at the
  shared forehead. Record and Protocol home are content Pages and must never be
  measured from nested row text. An App-back handoff may reuse a surface, but
  it may not reuse the previous side's height.
- A content-heavy App grows for real content while keeping the shared default
  minimum. It does not introduce its own minimum to reserve empty space.

## Structure

```text
Route
  Session: the stable place
    App window: owns radius, border, edge color, and shadow
      App page: a flat sheet that moves inside the window
```

## Two app behaviors

### Journey

Used for questions, teaching, setup, and habit creation.

- A new chapter or server question begins with one cover.
- Answered pages remain available while the chapter is an open draft.
- Before confirmation, the person may move backward and edit any answer.
- The last question leads to a separate completion page.
- Every Result or Confirm Page has the same terminal interaction. For its first
  1.2 seconds, forward travel is closed and backward travel stays open. Then a
  quiet `Swipe when ready` cue appears and one deliberate forward swipe either
  reaches the chapter's Idle Page or gives the App back. It never fades itself.
- The old `dwell` and `swipe` declarations still validate the immutable Page
  anatomy and destination of published chapters; they no longer produce two
  different gestures. An unknown or conflicting ending still fails the build,
  and Session names never choose the ending.
- Page numbers appear only when there is more than one page to count. A chapter
  with one question showed "1/1", which is not progress.
- After completion, the draft pages retire and only the useful idle app
  remains.
- A new immutable chapter version creates a new journey and cover.
- Only a genuinely new cover receives the staged update reveal. Its solid
  surface appears before its words, and the cover cannot be swiped until that
  reveal is complete.

### Library

Used for charts, weekly views, and other things worth reading again.

- Pages may move in both directions.
- The frame keeps one stable height.
- The selected page survives route changes and reloads.
- New server data may create a new cover once.

## Reflect

- Reflect has three parts and no more: **the life you want**, **the life you
  are living**, and **the space between**. Athena's voice runs through all
  three; it is not a fourth part.
- The gap belongs inside the space between. It was its own section asking the
  same question as the reading, which made two App Boxes out of one idea.
- Reflect is for reading. Chapters ask a question and collect an answer, so
  they belong to Today. A publication assigned to Vision or Athena still
  delivers into its App Box, but Reflect never grows its own questionnaire.
- Character is the authoritative answer to who the person is becoming. Routine
  identity is the short daily focus; a habit identity belongs to one habit;
  Mission says how the person intends to live. When Character is absent, Athena
  may use Routine identity and then Mission only as labelled fallbacks.
- Vision, Character, Mission statement, Typical Tuesday, and Six months are
  distinct wanted-life records. Dreamline remains a separate finite plan.

## Lines

- A **Line** is one-beat content that gives and collects nothing: a quote, a
  joke, a small fact. It is not a Chapter. There is no run, no version, no
  cooldown and no completion, because all of that machinery exists to keep an
  answer and a Line never asks for one.
- Content that gives is unrationed. Content that asks stays rationed. Being
  asked constantly is what stops a person answering honestly, and honest
  answers are the whole input to Athena; a quote costs nothing to see.
- Deep Thoughts' label opens a single Quote from the Admin-managed Supabase
  catalog, using the same App Box and existing Line exits/reactions. The Quote
  stays until dismissed, never advances the question and never saves its draft.
  A valid public catalog is cached for offline reading; an authoritative empty
  catalog has no bundled fallback. This does not change Note's mixed Line pool.
- The Note label flips the same App Box to its Line back. It never summons a
  Chapter. Chapters arrive on their own in Thoughts and return to Thoughts when
  completed or dismissed.
- A quote is one Line Page. A fact or joke keeps setup and reveal as two
  adjacent Pages. Those Pages may rotate through the shared idle dwell; a Line
  never dismisses itself on a timer.
- The Line face has a text kind label, not a Note return button. Swiping
  backward past its first Page returns to Note. Swiping forward past its last
  Page first reveals reactions; choosing a reaction records feedback and
  returns to Note. Swiping forward past the end again returns without requiring
  a reaction. Reactions are optional feedback, not Chapter answers or completion.
- The neutral inset edge says that the arriving Page is not the person's Note.
  The top-right `FACT`, `JOKE`, or `QUOTE` label says what kind it is; colour
  does not encode kind.
- Lines are white. The App Box paints Bone and owns that surface; the Page
  declares no colour of its own.
- Facts and jokes keep their reveal shape. Jokes are exactly setup and
  punchline; a Line with a third clause is removed rather than padded out.

## Chapter History and Quest completion

- Finished steps and a completed Quest's View history open the shared reader
  through App-back. There is no separate Chapter History control beside the
  catalogue counter. Version labels stay out of the reader; original version
  references remain internal so saved questions/answers stay correct. Back
  returns through History to the same Quest. Content grows downward without
  an inner scroller. A broader all-chapter archive is deferred.
- Read saved question/display snapshots first. Missing question snapshots may
  use only the exact original chapter version. Missing/conflicting definitions
  never borrow newer wording. Keep the answer visible with an unavailable
  question/title marker when necessary; unknown dates remain unknown.
- An unfinished Quest keeps View steps / Hide steps using the shared reusable
  button setting. Finished steps open read-only answers, never the player.
  A complete Quest offers View history, listing each completed/setup step.
- A named active Habit, both saved Log wake/sleep answers, a matching completed
  first-use publication, or the corresponding saved declaration may satisfy
  its own setup step. Show Already set up when no run of that chapter was
  completed. This is derived UI status, not permission to manufacture answers,
  completion times or completed runs. App access alone satisfies nothing;
  ordinary reflections and Week setup/reviews still require their own runs.
- The Habit/Log setup surfaces use this same evidence and suppress duplicate
  setup deliveries. Stale Quest pins to completed/satisfied steps are cleared
  without replay. A genuine unfinished step still opens its chapter. Workshop
  reruns and named weekly review entry remain separate existing paths.
- Entry after any completed Day One goes directly into the app (2026-11-06).
  Week/Log setup, weekly review and daily greetings never open automatically.
  Keep explicit Quest, Week and Workshop entry and the same saved players/runs.
  An unfinished Day One may still open on entry; a newer version does not
  interrupt someone who completed an older version. No saved completion or
  access gate is rewritten by this entry rule.
- Browsing never applies outcomes or requests AI. The chapter reader has no
  correction/submit controls. A step with setup evidence but no saved answers
  says so without inventing a chapter record.

## Editions

- Athena's reading is published as **editions**: dated, immutable, and
  accumulating. A reading that is overwritten every morning can never be new,
  never be unread, and never be read back.
- An edition is identified by its own words, not merely by a preparation date.
  Unchanged prose does not claim a new edition.
- Daily preparation describes the legacy prepared-content integration, whose
  external scheduler is not certified by this standard. The planned paid beta
  runs interpretation only on an explicit reading/reply request; saving or
  correcting a record starts no generation. A requested result appears when
  ready without a second reveal request. Preserve existing prepared content
  until its separately reviewed migration; request accounting remains open.
- Only authored prose is published. The derived observations that stand in for
  a page Athena has not written are a fallback for display, never a
  publication.
- An edition never mixes with another day. A part Athena did not write in a
  past edition says so, rather than borrowing today's profile text.
- Editions merge as a union. A phone syncing from a copy that predates an
  edition never loses it.
- The phone carries a bounded archive; the vault keeps the full history.
- The Athena's Reading cover label opens read-only History using shared
  App-back inside the cover slot. It lists locally retained editions newest
  first with their publication dates, or Date not recorded. Opening an edition
  reads its cover and all three parts using only that edition's prose. Missing
  parts say No saved words for this part. Back returns to History then the
  current cover; History does not add a fifth swipe Page. Outer swipes stay
  locked to the cover while History is open. Long history/detail grows downward
  without an inner scroll panel. No reply editor or publication handler runs in
  the archive. Current reading/reply behavior and the 60-edition retention bound
  remain unchanged; older server paging is separate work.

## Note

2026-11-06 current-copy refinement: Saved copies shows the current saved Note
first, then retained Cloud/Device histories unchanged. Current-note history reads
the live ledger. New entries belong to normal History. All bounded writing Body
scroll areas hide scrollbar chrome, retaining wheel/touch/keyboard scrolling.

2026-11-06 conditional Sync controls: History shows Sync only for saved work
awaiting sync, conflicts or recoverable errors. Empty/draft-only/completed states
have no Sync action. Try again appears only after an error, not while retrying
or after success. Retained histories open through Saved copies on the owning
Note History row. The normal row continues to open the editor.

2026-11-06 sync refinement: Cloud and Device show only their authored content
and any necessary Trash marker. Tap either copy for dated read-only history;
Back returns to comparison. Use the Note default CreativeButton, stacked Use
Cloud then Use Device. Hide scrollbar chrome while retaining bounded Body
scrolling. Confirmed choice returns silently to the list; pending/error/retry
remain visible only when relevant. No persistent success message or history
expander. Normal Note History still opens its editor. This supersedes the
initial sync presentation below.

2026-11-06 writing-sync addition: History opens a separate Writing sync Page.
Status and conflict controls live there, not in the silent Note editor or global
header. Review vertically stacked This device and Cloud copy with dates/Trash
state; explicitly choose the current copy while preserving both histories. Keep
the shared App-back engine, bounded writing Body and visible Footer. Changed
copies require renewed review. No draft upload or automatic winner is implied.

The developer approved the account Note refinement on 2026-11-03. It supersedes
the earlier explicit-Save/draft controls for Note only. See the
[writing journeys](PERSONAL_RECORDS_AND_ATHENA_PLAN.md#5-writing-journeys).

- Note takes as much writing as a person wants in Main Body and Sub Body.
  Account Note views grow from the shared minimum to a 480px App Box ceiling,
  reduced to 60% of the dynamic viewport on short phones, never below that
  minimum. Note, History, Trash and opened Trash content scroll only Body past
  the ceiling. Header, Heading and Footer remain outside the scroll area.
  Routine and draft/running Protocol retain natural downward growth; expanded
  Protocol Past phases shares this history ceiling.
- Note saves after a short typing pause and when leaving the editor. Text
  composition finishes before autosave. Focus keeps idle rotation paused.
- There is no Save, Clear, Discard, Drafts, Versions, Undo or save-status UI.
  Recovery/revisions remain internal; failure keeps text available and offers
  Try again. Do not show Saving/Saved on this device for Note.
- NOTE and HISTORY use matching typography and a measured equal baseline in
  the header, preserving 44px targets and the shared forehead. Focused title/body
  fields keep the caret without an outline, border or box; button focus remains.
- Note/header/text actions use `#E36B37`; title/body remain Ink. History
  has a Note back action, Trash in its header and grouped dated entries with times.
  One full-width New Note action lives in the Note editor Footer. It finishes
  saving current text before opening a blank Note; failure keeps the text open.
  Opening a saved Note edits it directly.
  A separate 44px orange trash-bin button sits at the right of each editable
  local row. It moves that Note to Trash silently, without opening it. Restore from the
  Trash page; there is no Undo shortcut. Read-only legacy sources stay read only.
- Existing Notes can be emptied by ordinary text selection/deletion. Save that
  as an empty version; do not remove the value or recover old wording. An empty
  new composer creates no saved entry. Internal revisions and Trash/Restore remain.
- An empty Note shows one short phrase from the separate Note placeholder pool.
  Placeholder words never become saved evidence and never use Line runs,
  cooldowns, or completion. The Note label retains its Line action.
- The older legacy single-Note editor is not migrated by this refinement.
  Thoughts, Deep Thoughts and reading answers retain Send/Save changes and
  their existing draft/history rules.

## Protocol

- Routine is the first Page of its App Box and Protocol is one swipe across.
  The current Protocol phase is its front; `Phases` opens Protocol home on the
  shared App back.
- A running protocol can be changed through the explicit `Edit phase` action.
  Its App-back label names the visible side and never doubles as an editor.
  Only the separate 44px checkbox target keeps or undoes a term. Tapping the
  words performs no action. Kept words remain visible without strikethrough;
  Orange fills them upward with the checkbox's shared 300ms liquid response.
  Reduced motion switches directly. This supersedes the old whole-block action.
- An edited term keeps its id, so the days already marked against it stay
  attached. A term taken out is archived, never deleted.
- Term edits, additions and removals apply from the next local Circle day at
  06:00. The editor shows the pending words; the daily front keeps today's
  agreement. Editing never reticks a day or rewrites a seal. Past phases groups
  wording by applicable date interval, with counts over that interval. Missing
  original legacy wording is labelled Earlier wording unavailable.
- Length is the one thing a running protocol cannot change. The day counter and
  the ending are arithmetic on it, and a run that can be shortened when it gets
  hard is not a protocol.
- Protocol carries its weight in Sub Body. The terms are the page; the name and
  the duration are one Main Body line above them. The two-parts-to-one rule is
  wrong here, so both tracks size to their content the way Habit's do once it
  has rows.
- A Page must put its content in Main Body and Sub Body. Loose children fall
  into the Body tracks by position, which is how the Protocol name alone came
  to be stretched to fill the Main track.
- Keep the five current duration choices: **1, 3, 7, 14 and 21 days**, confirmed
  by the developer on 2026-11-02. Keep the existing shared choice presentation.
  Any layout change requires a reviewed UI scope with readable phone labels
  and 44px targets; correcting this count does not authorize a layout change.
- Ending a run early lives inside the editor reached by `Edit phase` and asks
  once. The terms were agreed before the run began and the days do not come
  back, so the action states what the next press does and the question expires
  rather than waiting all day. The running front keeps one Footer action.
  Closing a run that has already finished asks nothing; there is nothing left
  to lose.

## Idle rotation

- The Today check-in session is the only App session that turns its own Page.
  Note and Deep Thoughts turn between themselves after one
  `IDLE_PAGE_DWELL_MS` dwell.
- Routine, Protocol, Log, Vision, Week Review, and Athena stay on the Page the
  person chose. A hidden action is a placement defect, not a reason to turn a
  working App while the person is reading it.
- Turning never interrupts. The dwell restarts on any touch or key inside the
  box, it waits while anything inside the box has focus, it holds while a
  thought is part written, and it does not run while the app is in the
  background.
- A turned Page arrives with the ordinary quick page travel, not the ceremonial
  update reveal. Nothing new has arrived; the box is only showing what it holds.
- A journey, a Chapter and a pending publication never rotate.

## Interaction

- The outer session frame stays still.
- The window is one uninterrupted shape. Moving pages never carry their own
  rounded outer corners, borders, or shadows.
- Only the inner page follows the finger.
- A swipe completes inside the clipped frame before state changes.
- Ordinary page travel stays quick enough for consecutive swipes. Ceremonial
  update motion never slows browsing through an existing app stack.
- Every in-place App side change uses the shared App-back controller. Feature
  code supplies only its two sides and never supplies another transition class,
  timer or height ease.
- The active page is always kept in the navigation map while permissions or
  saved progress change. It never falls back to the cover by position.
- A required first-use cover has a hard right boundary. An optional Check-in
  cover may swipe right into its idle app to mean `Later`.
- The incoming page is promoted in place after the swipe. Its horizontal
  entrance never replays during the state change.
- When pages have different heights, the frame keeps its old height until the
  swipe completes, then eases to the new page height.
- A tap never becomes a swipe.
- Text fields never focus because of a swipe.
- Every swipe also has a button or keyboard path.

## Visual rules

- White: primary reflection.
- Orange: identity and active change.
- Dark: practical tools and evidence.
- Radius, border, background, and shadow belong to the stable frame whenever
  pages share a theme.
- Fixed-height chart sessions scroll inside themselves when needed. They never
  push the whole route while changing pages.
- Fluid-height sessions use the shared frame resize. Reduced-motion settings
  make the resize immediate.
- All app interiors use Geist. Cormorant remains an outer editorial typeface.
- Pages of the same type reuse one component and typography scale. Do not make
  a one-off Cover, Note, Thoughts, or Blog visual inside a feature.
- Every Page keeps Header, Heading, Main Body, Sub Body, and Footer. Empty
  optional text does not move those anchors.
- **The forehead is one number for every App.** The space between the App Label
  and whatever comes under it is `--os-label-gap`, currently `48px`, and it
  hangs off the Label rather than off the Heading track. Sai set Routine as the
  reference first — *"i want the forehead size of the routine app to apply
  everywhere"* — and originally set the number: **80px** (reduced to **48px** on 2026-11-03). Every App matches it: Note,
  Thoughts, Routine, Protocol, Log, Dreamline, Vision, Week Review, Athena's
  Reading, Suggestion. Earlier 80px measurements covered **every Page**, not one per session:
  five Apps on Today at `80.9px`, and all twenty Pages on Reflect at `80px` or
  `80.9px` — the three Vision declarations, the nine Week Review Pages, the four
  Athena Pages and Suggestion. At phone width the App Box still sits on its
  `344px` floor with the Footer 22px inside it and nothing clipped: the forehead
  comes out of the Body's spare height, not out of the frame.
- **Body does not centre.** It begins at the forehead in every placement.
  Centring is what made a balanced Page put its first line wherever the text
  length left it: a short Note measured `105px` under its Label against
  Routine's `24px`. An App Box that holds less text is shorter; it does not move
  its first line.
- **Three things break the forehead, and all three have.** A Label that restates
  its own type (`line-height: 1` gave the Note Label a 10px box against every
  other Label's 17.2px, and 4px of extra forehead under it). A Label that
  animates from an offset (`translate3d(0, -4px, 0)` held the Thoughts Label
  above its own line). An App Box built outside the contract (Athena's Reading
  carried its own `330px` floor and a `0.85rem` gap; Suggestion had `22px`
  padding and no forehead at all; Athena's cover centred its heading in a `1fr`
  row, so its forehead was whatever the row left over). Check those before
  adding a rule, and measure every Page of a session rather than the one that
  happens to be showing — the Athena cover was the only Page of twenty that was
  wrong, and only walking all of them found it.
- **A Label that is also a button resets what the button adds and nothing
  more.** It never restates font, size, weight, tracking or line height — those
  come from `.os-card-label`, whose line height is `--os-card-label-line-height`
  so that a `<p>`, a `<button>` and a `<span>` share one box. This exact fault
  has shipped four times: the Habit toggle, the Protocol toggle, the Vision
  label, and New habit.
- **A header action sits on the header's line, not in the middle of its touch
  target.** New habit kept a 44px target but centred its text inside it, so it
  hung roughly 17px below the App Label opposite. The target stays; the word
  goes to the top of it.
- Main Body begins at the forehead and grows downward. Sub Body follows
  directly beneath Main and may grow without moving it. Main used to centre
  through three lines and pin at four; that is what made the forehead differ
  from App to App, and it was removed on 2026-08-20.
- A Page has four regions in one column: Header, Heading, Body, Footer. Body is
  the only one that flexes. Written with Heading flexible instead, spare height
  collects above the words, so a short thought sits low and jumps upward the
  moment it gains a second line.
- On Cover, Note, Thoughts and Vision declaration Pages, Main begins at the
  forehead and Sub hangs from its last line at the shared gap.
- Cover Main text and editable reading surfaces share the forehead anchor and
  remain left-aligned. Cover retains its existing scale; the editable surfaces
  named above use 29px main and 18px body text.
- **A label is dimmed by choosing a lighter step, never by using the surface's
  own text colour on the wrong surface.** Section labels on a dark App Box use
  a neutral step that clears 4.5:1 against it. The Dreamline shipped its section
  labels in Ink on `--c-neutral-950`, which measures 1.13:1 — invisible rather
  than quiet. `--c-neutral-400` on that surface is 6.42:1 and reads as the quiet
  signpost the label is meant to be.
- A Note Page keeps its Main text at the same forehead anchor as a Cover Page.
  Optional Sub text begins beneath Main without moving it.
- Routine App Pages place the editable app identity in Main Body, habits then
  Tasks in one continuous Sub Body, and Add task in Footer.
- Habit Record keeps Today so far with its existing Undo controls. Its top-right
  History label opens a separate read-only Page using the shared App back.
  History groups completions by day, newest first, showing Yesterday without
  its date and dates for older days. It has no picker, wording notices or dark
  divider. Provenance remains internal; missing original wording is never
  invented. The History body alone scrolls at the same 480px/60dvh frame ceiling
  as writing; its header stays fixed. The header's Record action returns to
  today's completions. Routine and draft/running Protocol retain natural
  downward growth; expanded Protocol Past phases also uses the history ceiling.
  See [the refinement checks](../../USER_JOURNEY_TESTING.md#habit-history-page-and-flexible-entry-2026-11-03).
- New habit shows action, time/location and identity together, accepting any
  field first. Its action is required to become an active visible Habit.
  Unnamed work remains a recoverable draft and is hidden on leaving the row;
  New habit reopens it, including after reload. Moving between fields does not
  discard it. A saved Habit cleared deliberately retains the existing archive
  behavior. The Routine focus/title remains a separate editable field.
- Repeated habits form one continuous Sub Body stack. Each habit uses one
  quiet divider and one row rhythm; it never creates a nested card or double gap.
- Routine is the first Page and Protocol is one swipe across. Their Headers are
  equal and their editable identities begin on the same line.
- Their title box, title-to-first-label gap and Footer action outer height are
  equal too. A feature-specific Footer or duplicate content gap must not move
  one identity below the other.
- When Routine has no rows, the empty Sub Body collapses and the Page rests at
  the shared default height.
- Full-width actions use the same black button language across apps.
- Text answers use borderless editable typography, not a separate form-box or
  underline visual. The App Box grows for a paragraph; the text does not shrink.
- Choice, slider, and short-answer Chapter Pages remain at the default App Box
  height. Empty form geometry must never make a short page taller.
- Note, Thoughts, short Chapter, empty Routine and resting Protocol Pages all
  use the same default App Box height. Only real added content may request a
  larger stable height.
- Draft and running Protocol Pages grow downward for their real terms, with no
  inner terms scroller. Expanded Past phases instead shares Note's bounded
  Body scrolling, retaining the same default minimum.

## State

- Journey progress is stored by chapter id and immutable version.
- Library position is stored by session id and data version.
- Note opens on its editable front and its label flips to a Line. New chapters
  target Thoughts and arrive there on their own. Legacy immutable publications
  already assigned to Note remain readable, but authoring and compilation no
  longer create new Note deliveries.
- A private published chapter is immutable by id and version in this browser
  and remains available offline. A public published chapter is written as an
  immutable Markdown source through the connected Circle OS server, then
  cached locally for offline use.
- Every immutable publication names one destination app, one audience profile,
  visibility, delivery mode, source, and publication time. Publishing the same
  chapter elsewhere creates another immutable publication version.
- Admin publications default to manual delivery. Athena publications default to
  on-view delivery. Public publication always needs explicit approval.
- A pending Thoughts publication visits the whole App Box rather than becoming
  a Thoughts or Deep Thoughts face. Completion or dismissal restores the
  Thoughts front. Habit, Log, Vision, Seven Days, and Athena publications are
  likewise one-time journeys that retire back to their normal App.
  Dismissal, when that App offers it, also retires the delivery rather than
  adding it to a recall queue.
- Closing a kept Protocol day writes a dated seal. A running day's ordinary
  ticks remain editable. Finished-phase rows are read only, with no last-day
  correction action or editor. The developer removed that feature on 2026-11-03.
  Any already-saved correction receipts remain intact for persistence and merge.
  The factual kept-day Page is
  transient, occupies the Protocol slot, pauses idle rotation, and one swipe
  removes it without adding a stack or chapter run.

## The key

Every pressable thing in Circle OS is one object, described once in the
`--os-key-*` tokens and consumed everywhere: a face raised on a solid leg, lit
along its top edge, that drives flat onto the surface when pressed and comes
back up a little slower.

- A control names its size and its leg colour. It never restates a shadow.
- Sizes are lifts, not heights — `--os-key-lift-lg / -md / -sm`, 4px / 3px /
  2px — so one recipe fits a 30px task tick and a 52px footer action. The leg is
  exactly as tall as the lift, so a press removes both and the face lands where
  the leg was.
- A leg is never blurred. A blur reads as floating; a key is seated in the box.
- The top light is drawn only where it can be seen: `--os-key-light` on a light
  or orange face, `--os-key-light-soft` on Ink, `--os-key-unlit` on a Bone face
  that is already the lightest thing on the Page. The unlit value is a
  transparent shadow, never `none` — `none` is legal only as a whole box-shadow
  and voids the leg with it, leaving a face floating above nothing.
- Down is `--os-key-press-ms` (40ms). Anything slower reads as lag rather than
  contact. Pressed and held states are sunk, so the light comes from inside the
  hole rather than off the top edge.
- Row ticks, Protocol terms, the button engine's default style and every plain
  full-width Page action are built from this, and so is anything added later.
- A ghost control is not a key. `.os-add-habit-row` stays flat, because a dotted
  invitation that presses like a commitment claims to be one.
- The rotating bag of button styles belongs to Button Studio. The App's own
  actions use the standard key.

## Page arrival

- Leaving is one flat content-layer fade. The App Box background stays stable.
- New or refreshed content enters Body first, Header second, Footer last.
- Ordinary swipes remain quick and never replay the refresh sequence.
- **An App Box never empties and replays its arrival to confirm an action.**
  That is what it does when a Page changes for any other reason, so it answers
  "something happened" rather than "that went". A send is signalled by the thing
  that was sent leaving: the written words lift and fade while the frame, the
  Label and the Footer hold still and the action holds on its completed word.
  Where a Page carries a question and an answer, only the answer travels.
- **An App Label has no arrival of its own.** It is present with its Page. A
  word that names where you are may not be the last thing on the Page to settle.
- A terminal Page never fades itself. After its protected pause, the person's
  deliberate swipe uses ordinary Page travel. Reduced-motion removes the cue's
  small arrival animation but not the 1.2-second accidental-swipe guard.

## App back

- An optional App back is a side change inside the same stable App Box. Its
  front is what is needed today; its back is what the App holds.
- Note / Line, Deep Thoughts / Quote, Routine / Record and Protocol / Phases
  use the same controller and timings: 260ms to leave, a 500ms calm arrival and
  840ms for the complete handoff.
- The controller holds the old measured height through the leave, then eases
  the frame to the fully measured incoming Page over 440ms while that Page
  arrives. Copy and geometry settle together instead of flashing first and
  resizing afterwards. Reduced-motion mode changes sides immediately.
- A mode label names the visible side. It is never an edit or completion
  action. Returning to an already known side does not replay a staged arrival.

## Named placement

- `AppPagePlacement` is the Page placement contract. A Page declares
  `balanced`, `identity-stack` or `content-flow`; feature CSS does not borrow
  another App's placement class.
- `identity-stack` owns one Header track, an optional absolute right action,
  the shared `.os-app-page-heading`, labelled `.os-app-page-stacks`, and the
  direct Footer action geometry.
- Routine and a running Protocol both declare `identity-stack`. Log, Record and
  Protocol home declare `content-flow`. Moving a shared heading or Footer rule
  moves every Page that names the contract.
- A Vision declaration versions only through `Save declaration`. Blur, route
  reload and ordinary typing never create a declaration. The current front
  shows three kinds: Vision, Mission statement, and Typical Tuesday. Tapping a
  declaration's top-left kind label flips to superseded immutable records on
  the shared App back. On that back, `History` is a passive top-right state
  label rather than a second action. Character and Six months already exist as
  versioned records; their front-Page design remains a separate review.

## Athena Reading replies

These bullets describe the current answer-as-evidence flow on prepared readings.
The planned paid service separately supports explicitly requested AI follow-ups;
saving an answer requests no AI reply. Exact new controls remain under review.

- An authored Reading paragraph may end with one real question. Only the
  latest Reading can be replied to; an older immutable edition stays read-only.
- `Reply` opens one textarea on that Reading Page. Sending uses the shared
  survey and evidence queue with kind `athena-reading`; it does not create a
  score, count, reaction, or separate feedback store.

## Fixed evidence Apps

- The Week label opens read-only History through shared App-back, inside the
  Week slot. Past calendar weeks with saved weekly goals or a review appear
  newest first. Opening one reads saved goal status, linked task words/status,
  assigned step dates and review answers/recording time. Missing links stay
  visibly unavailable; no old wording is invented. Back returns to History,
  then the current Week. History locks outer swiping to its own slot and grows
  downward without an inner scroller. Browsing never writes or replays a review,
  creates next-week goals/tasks, or ends/starts a Protocol phase. Weekly review
  corrections/versioning remain separate work.
- Log uses the shared Page and frame rather than a route-level heading above a
  free-standing timeline. Its evidence surface remains dark.
- A long Log timeline grows the App Box downward, using the natural page
  scroll. It does not create an inner Body scroller. This corrects the older
  fixed-scroller description to match existing CSS and verification.
- The App Box owns background, border, radius, clipping and shadow. Until its
  second App exists, Log shows no back control.
- Log owns one persisted outer `SwipeSession` and never rotates itself. Its
  Pages are the daily timeline and Week. Dreamline is disabled behind
  `SHOW_DREAMLINE`; current source conditionally attaches its idle/sheet Pages
  to Routine, not to Log. Older multi-Page Dreamline layouts are historical.
  Preserve hidden records and keep the flag off; future placement needs review.
- The Log label opens History through the shared App-back engine.
  History lists every past day with a saved title, activity or moment, newest
  first. Empty automatically created days and future plans are not Log history.
  Opening a day reads its assigned date, saved title and original time blocks,
  including legacy moments; today's routine suggestions never fill old days.
  Back returns to History, then today's Log. History/day reading stays inside
  the daily slot, without swiping into Week; Week remains available from today.
  Browsing does not write records, queue evidence or trigger chapter outcomes.
  Both the list and day grow downward.
- Tap a saved past activity/moment to open its text editor through shared
  App-back. Save changes accepts the activity and moments; Cancel returns to
  the day without saving. The original date, time range, ID and first-recorded
  time stay fixed. Stale entries cannot be saved over a newer change.
  A changed save retains immutable before/after words with actual correction
  time. An unchanged save writes nothing. Clearing keeps a dated empty value
  in that receipt and removes the block from active day evidence; older copies
  cannot restore it on merge. Time/date changes and new past entries remain
  separate work. Reload/account changes close unsaved Log editors.
- A Dreamline is separate from Vision declarations. It is dated, costed and
  finite; a concluded record remains immutable and readable while a new
  Dreamline begins with a new id.

## Protocol home

- With no running phase, Protocol home is front. With a running phase, the
  phase is front and home is the `Phases` back.
- Home reads completed and early-ended runs from existing local records. It
  stores no aggregate and presents only within-phase counts, dates and terms.
- Past terms cannot be ticked while browsing. There is no past-day correction
  control. Dated term snapshots preserve prospective changes. Protocol term
  inputs hide native scrollbar chrome while wrapped text grows downward.
- Opening Past phases allows the frame to grow to Note's 480px/60dvh ceiling,
  never below the shared minimum. Beyond that only Body scrolls; Header and
  Footer stay fixed. Closing removes this bound. Active phase editing/running
  Pages retain natural downward growth.
- Each past phase retains its full `1 of 7 days kept` summary under the title.
  Individual term counts use `1/7` and `0/7`; term rows have no white dividers.
  Dividers between different phases remain.
- Past terms are read-only text and reserve no 44px control height. Use the
  existing 0.65rem rhythm between term rows and before Remove. Remove retains
  at least a 44x44px target, with its label aligned at the top of that target.
- Starting from home uses the existing one-run draft path. A second draft is
  never created to satisfy navigation.
- Removing a finished or early-ended record archives its run with a newer
  timestamp. Archived runs stay out of the Page and its read models but remain
  present for local-first merge. A draft or running phase cannot be archived.
- Phase records and their dividers fill the Body width. Their name, outcome,
  kept days, dates and term counts stay grouped as one reading rhythm rather
  than being pushed to opposite edges.

## Admin previews and access

- Chapter Workshop and Button Studio render the production App Box and Page
  anatomy. The bounded parent owns width; content can grow only downward.
- Choice options stack one full-width row at a time and wrap naturally.
- Button Studio keeps its preview action mounted. The `Background` toggle
  changes only the preview surface, never the button lifecycle.
- Admin is intentionally absent from public navigation. Entering `admin`
  (ignoring surrounding spaces and letter case) in Thoughts opens the password
  prompt; only a valid server-checked password unlocks the protected browser
  session. The phrase and password are intercepted before Thoughts persistence.
  Missing/invalid server configuration stays locked. Unauthorized direct visits
  return to Today; entering the phrase alone grants no access.
- Chapter Library groups by Foundation, Short, Guided Learning, Reflection,
  and Information in that order, with empty groups hidden.
- A matching version restores the saved page.
- A new version returns to page zero.
