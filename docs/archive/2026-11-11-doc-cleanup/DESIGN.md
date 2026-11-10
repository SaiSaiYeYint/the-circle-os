> Historical snapshot preserved on 2026-11-11 before the approved documentation cleanup.
> This records earlier decisions, proposals and verification; it is not current instruction.
> Start with the [active document map](../../../README.md#project-documents) and
> [archive index](README.md) for the current replacement.

# Circle Design Guide

## Shared tool contract - 2026-11-11

This is the current contract for Note, Deep Thoughts, Routine, Protocol, Log
and Week, including History, Trash, Record, phases, details, corrections,
confirmations and writing sync. The developer approved this consistency pass
and removal of obsolete conflicting code. It supersedes dated header, gap,
checkbox and timing exceptions below. Dated entries preserve history. Update
this contract when a shared rule changes; do not add competing feature overrides.

- Use Geist and the existing Circle palette. Sizes: headings 28px, primary/body
  18px, navigation/support 16px, metadata 12px. Weights: 400/700. Headings and
  primary wording are bold; prose and support are normal. Week steps remain
  supporting wording under bold goals. Reading, editing and placeholders match.
  Heading leading/tracking is 1.2/-0.015em; compact task leading is 1.3, prose 1.5.
- Headers use 16px/700, 1.4 leading and sentence case. Shared controls retain
  each page's approved labels and sides, including Quote at Deep Thoughts' left.
  Visible wording
  meets the 24px side anchors; native borders/padding add no extra inset.
  Targets remain at least 44px.
- Page padding and the Header-to-first-Heading/Body gap are 24px throughout
  these tools and their supporting views. No 48px writing/Protocol exception
  remains. Main-to-Sub and Body-to-Footer are 24px. Use shared four-pixel tokens.
  Section/action-to-cue gaps use the shared 40px token; cue wording/arrow gap is 4px.
- Reuse one focused minimum measured against navigation and safe areas. Short
  pages rest there; real content grows downward without nested writing/history
  scrolling. The frame, top edge, width, radius and material stay stable.
- Glass actions use shared 52px height, 12px corners and 18px/700 labels.
  Completion controls share a 28px Orange glass rim, a 2px Ink gap and 22px
  Orange liquid fill. The white Geist ✓ matches Log's 16px/400 save mark and
  appears immediately; liquid rises over the shared 300ms text response.
  Controls sit inside at least 44px targets. Protocol words are separate from
  the checkbox and perform no action on tap. Checked words remain visible and
  fill Orange upward using the same liquid clip, curve and 300ms duration,
  without a strikethrough. Clear controls use the shared 8px cross/44px target.
- Equivalent interactions share the Page standard's engines, durations and easing.
  Week tasks and goals fade immediately over the 300ms completion response;
  checkbox-first and three-second waits are retired. Evidence saves immediately.
  Structural growth uses 600ms; typing follows directly. Header reflection is
  240ms inside letters; glass press/release is 150/400ms. Preserve all motion,
  transparency and forced-color preferences.

Reuse PageLayout, SwipeSession, useAppBack, RoutineHeaderButton, RoutineSwipeCue
and the button engine. Their legacy names do not restrict reuse to one app.
Domain behavior stays: Note autosave, Deep Thoughts Send, Protocol's authored
reward, local-first records and read-only historical evidence.

Before calling a change verified, run the tool-consistency browser matrix and
affected journeys. Measure visible edges, computed type, all four reference
frames, long-content growth and intermediate motion. Check reduced preferences,
focus/targets and relevant persistence with isolated synthetic data. Token
checks alone cannot establish consistency. Record evidence in the journey log.

## Week corrected action anchors and header - 2026-11-10

Developer clarified and approved the exact columns: goal cross/Add goal plus
at the 24px left anchor; goal wording/Add goal label and task cross/Add step
plus at 44px; task wording/Add step label at 64px. Tasks stay indented and use
regular Geist 18px/400; goal wording stays 18px/700. Week Header wording is
bold 16px/700 like the actual Routine Header, superseding the earlier regular
Header specification for Week. The Week Header-to-heading gap is 24px instead
of 48px. Preserve the 24px top/side anchors and all other Page frame floors.
Remove the Open Log button from Day's Record; retain the bottom-left Log cue.
Goal/task/add gaps remain 24/12/8px. These instructions supersede the preceding
add-control indentation and bold-task rules; the latest user correction owns.

## Week indentation follows Routine - 2026-11-10

Developer-approved refinement: indent the task list 20px so task clear glyphs
align with the start of goal wording. Task wording starts 20px farther inward;
Add goal aligns to goal wording and Add step to task wording. Keep completion
rims in the common right-hand column and preserve 44px targets. Use 24px between
goal groups, 12px from a goal to its tasks, and 8px between tasks and before add
controls. Match Routine's Geist roles: goals/tasks 18px/700, add controls
16px/400. This supersedes the common copy column, 4px task gaps, 8px group gaps
and normal task weight in the preceding Week refinement. Other behavior stays.

## Week compact rhythm and folded records - 2026-11-10

The developer requested tighter Week spacing on the four-pixel grid. Goal and task wording use the same copy column; clear glyphs start 24px inside the left rim and 28px completion rims end 24px inside the right rim. Touch areas remain at least 44px. The Orange arrow sits 4px after the goal text, with its own 44px target. Use 4px between tasks, 12px from the goal to its first task, 8px between goal groups and 16px between major blocks. Log and Week Header glyphs share 24px top/right insets. Padded Week editors opt into padding-aware measurement in the shared sizing helper; other editors retain their sizing behavior. Day’s Record folds by default, with main activity/hour on one row and 16px smaller activities below. History folds by day then goal, with the same Orange arrow beside each title.

## Day-filtered Week refinement - 2026-11-10

Week goal rows align their wording, a single small Orange downward arrowhead and the completion circle. Every goal starts folded; arrowheads have 44px hit areas and no task-count/date summary. Expanded rows contain only the selected day’s tasks, with no native date selector. The inherited raised-button offset is suppressed in Week so visible circles align with text. Day’s record has no day/date/title field. Completed goals leave the live Page for compact text-and-day History rows. The bottom-left tappable Log swipe cue is unchanged. This supersedes the earlier all-days expanded-step and current-page completed-goal presentation.

## Week goals and lived records - 2026-11-10

Approved Week adoption uses the existing dark glass frame, Geist and the shared
28/18/16/12px roles with 400/700 weights. Its Header has Week and History; This
week and the date range precede a horizontal rail of dated 56px-wide day
controls with a 64px minimum height. Today has an Orange rim and selection an Orange face. Open on
Monday when possible; keep the previous Sunday reachable to the left and give
every date a distinct accessible name. Past days remain readable and usable.

Goals show all their dated steps and may fold through a 44px disclosure control;
text focus opens the group for editing. Quiet contextual Add step/Add goal
actions replace the two large creation buttons. The selected day's Log record
is visible below, followed by folded completed goals. Week's approved 30px
completion rims retain 44px targets and glass; the checked face is Orange with
no tick, as in the accepted preview, superseding this Page's earlier Bone-tick
trial. Reduced-motion/transparency and forced-color paths remain available.

The shared tappable reverse Log cue stays bottom left, with its visible mark
at the 24px anchor and a target at least 44px square. Frame, typography and
forehead tokens are unchanged; long content grows downward and the date rail
scrolls horizontally. Reference-frame measurements and production-CSS evidence
are in [the journey record](../../USER_JOURNEY_TESTING.md#week-goals-and-lived-records---2026-11-10).

## Log fixes and Week goal hierarchy - 2026-11-10

Log and Week use Geist at 28px headings, 18px primary/body, 16px secondary/controls and 12px metadata, with only 400/700. Main activities and goals are bold 18px; moments and steps normal 18px; hours normal 16px except bold Orange current hour. History is regular 16px, explicitly superseding the earlier bold Header rule for these two Pages. Reading/editing/placeholders share role metrics.

An empty-hour plus opens its main activity; once a main activity exists, plus adds a smaller moment. Saved main activity stays in the hour's first grid row, with moments below. Week starts with day/date/tabs; This week's goals follows. Each goal appears once with its completion control and selected-day steps below. Spacing replaces dividers; Add Step/Add Goal precede The day and the Log return cue. Linked Tasks, existing completion/Undo, dates and read-only History retain their domain behavior.

## Log and Week controls approved - 2026-11-10

Log uses bold Orange current-hour text, one top-right History action and no Now shortcut. Empty-hour prompts read Add activity only at the current hour; saved/suggested activities stay readable and all hours remain editable. Visible plus/save marks meet the 24px right anchor while retaining 44px targets.

Week has top-right History, a bottom-left Log return cue, borderless day planning and aligned step rows. Add Step appears only with an existing goal; Add Goal sits after day planning/day tabs and before The day. Both use the shared glass action dimensions. The day count says N written. Existing completion/Undo, linked tasks, dates, History and Sunday review remain.

This approved refinement supersedes the earlier History/Now header and Week
header/step-placement rules. No record model or persistence change.

## Quiet Log controls and Week checkbox trial - 2026-11-10

Approved refinement removes Log's hour-row rules, retaining spacing. Current
hour text is Orange; the arrow is removed, with an accessible Current hour
prefix and aria-current=time. Both range-expansion buttons say Add hour and
retain hour-specific accessible names. Use the shared Add task glass treatment:
52px height, 12px radius, 18px bold label, panel anchors and control blur.
Inline activity/moment save controls are bare Orange ticks at the same 16px
type size as the plus, on transparent faces with 44px hit targets.

Week-specific checkbox material trial retains its existing 30px circle, Orange
rim, translucent Ink face, Ink checked fill and warm Bone tick. Add a quiet upper
reflection, inset depth and 8px blur. Existing goal/step actions and linked task
identity remain. Fill and tick fade/expand from 0.85 to 1 over the shared 300ms
response; Undo reverses it. Restored checked states appear directly. Reduced
motion is direct; reduced transparency uses opaque Ink/no blur; forced colors
use system face, fill and tick colors. Routine's controls and Week's broader
layout remain outside this trial. This supersedes the recommendation's mistaken
filled-circle shorthand: source inspection confirmed the existing Bone tick.

## Full-page Log and left Note cue - 2026-11-10

Approved Log adoption uses the existing timeline, editor, History and correction
engines inside the shared full-page glass frame. Today offers a Log entry;
#log preserves the focused tool through reload and root Today navigation exits.
The Header is History/Now, in sentence case, 16px bold with the shared text-only
reflection. Now retains its earlier top-right placement. The person's day title
uses the 28px heading role; activity writing is borderless and Bone. Keep 24px
gutters, 48px forehead, at least 44px targets and natural timeline growth.
History/day/correction views use the same family; accepted corrections retain
their original dates/times and before/after records. Existing Save changes uses
the shared glass action. Week is reached through the existing swipe pair and
the right-aligned Week cue; its own controls/layout await the separate redesign.

The Note return cue on Deep Thoughts is left aligned, superseding the preceding
both-right-aligned decision. Its action gap and hit area are retained. No store,
record, sync, chapter, timing, or question-budget change is part of this slice.

## Deep Thoughts and writing-pair cues - 2026-11-10

The developer approved adopting Note's full-page glass family for Deep Thoughts
and its supporting History/Trash views. Use Bone writing, a full-width 28px bold
question, 18px body answer, 16px bold header controls, 52px/12px glass actions and
24px visible side anchors. Deep Thoughts has Quote/History in its editor Header;
Note retains Back/History. Quote opens the existing quote side and returns to the
same question and answer. No extra Quote action is added below Send.

Reuse RoutineSwipeCue for both writing Pages: Deep Thoughts forward from Note,
Note backward from Deep Thoughts, both right aligned below the main action.
They use the existing SwipeSession travel and the same account writing frame.
Today offers Note/Deep Thoughts above Routine/Protocol. Keep legacy identifiers;
the focused URLs are #note and #thoughts, including reload and root-navigation exit.

The New habit-to-Tasks layout gap is the shared --os-tool-section-gap (40px).
Use it between Add task and its cue and between each writing action and its cue.
The cue's 44px hit area may enter the gap. A static 2px optical offset matches
Geist's visible cue wording to the heading ink (38px visible gap in browser
measurements). Routine's short content flows through its cue, with unused shared
minimum-frame space below; this supersedes its earlier fixed 24px bottom-cue
inset. Writing retains its bottom action/cue group. Full-page floors, foreheads,
natural long-content growth and local-first writing remain.

## Bottom navigation - 2026-11-10

Material/alignment refinement: the bar now shares the App Box panel background,
inner glass wash, rim, shadows, 36px radius and 24px blur. Its visible side edges
follow the opened frame (24px shell gutters on phones); other roots follow their
content gutters. It rests 24px above the device bottom plus its safe area.
An empty/short opened frame reserves a 16px gap above the bar. One shared focused
minimum accounts for the tool's layout position, navigation height and safe area,
with the existing 344px lower limit. This supersedes the opened tool's fixed
100dvh-minus-180px floor below. Real content still grows down and scrolls past
the bar; no joining effect or new transition is implemented. The merging animation
is only an idea for later review. Opened Note drops its inherited 8px top padding
so its frame starts on Routine's anchor. Its internal forehead remains 48px.

Approved four-destination dark glass bar: Home, Today, Reflect, Explore. Use
28px icons and visible 12px labels, with at least 44px targets. Home is the
simple house outline; Today is always a hollow circle; Reflect is two diagonal
overlapping circles optically fitted to Today's bounds; Explore is the eight-point
compass rose with centred symmetrical dark openings and no direction letters.
Only Bone linework and labels become Orange on selection; no filled circle or
selected tile. Keep a restrained static Orange glow. Current-page semantics and
keyboard focus supplement color. Keep the bar visible in opened tools, hiding it
when an active editor's visual viewport indicates a keyboard. Reserve bottom
content space and the device safe area. Reduced transparency uses opaque Ink.
Home and Explore are intentionally empty routes pending their own design.

## Current app visual standard - 2026-11-10

The shared tool contract above now applies this visual family to all six tools
and their supporting views. The role and material definitions below supply its
foundations; dated adoption notes preserve earlier scope and rationale.

### Identity and typography

Whole. Human. Alive. Keep the reading area calm, with brighter interactive glass.
Use the exact Bone, Ink, Orange and Charcoal values in `app/brand-system.ts`;
derive translucency/reflections from those colors. Orange marks action and
active state. Threads are decoration, never evidence or progress. Functional
surfaces use Geist; Cormorant Garamond remains an outer editorial typeface.

| Role | Size / weight |
| --- | --- |
| Section headings | 28px / 700 |
| Primary wording, Habit/Task text, glass action labels | 18px / 700 |
| Prose at body scale | 18px / 400 |
| Header navigation, including Routine Back/Record | 16px / 700 |
| Cues, supporting fields, time/location, secondary controls | 16px / 400 |
| Metadata and dates | 12px / 400 |

Use only 400/700. Reading, editing and placeholders share the same role metrics.
Do not shrink text to force a fit. Text entry stays borderless, including focus,
with a visible caret; non-text controls retain visible keyboard focus.

### Spacing and placement

Use shared `--space-*` tokens on the four-pixel grid. Standard Page padding is
24px on each side, measured from the inside App Box border to visible content.
Measure text/glyph/rim edges, not merely their larger invisible hit areas.
Main starts at the forehead anchor and grows downward. Body-to-Footer and
Main-to-Sub are 24px; App-to-App is 16px. All six tools and their supporting
views now share a 24px forehead, superseding the former 48px exceptions.

The reference list uses 4px within a Habit's fields, 8px between rows, 12px
from list to creation button, and 40px between Habits and Tasks. Cross glyphs
start at the 24px left anchor; the developer retained a 20px copy indent.
Visible completion rims end at the 24px right anchor. Footer cues use a 4px
text/arrow gap; forward cue ends 24px from the inside right/bottom borders,
and the reverse cue begins at the matching left anchor. Targets remain at
least 44px and may enter existing gutters without overlapping adjacent targets.

### App Box and controls

One stable rounded frame owns its border, shadows and background. Pages move
inside it without separate outer corners or gaps. Reference frame radius is
36px with a quiet pale reflection, Bone rim, faint Orange depth and 24px backdrop
blur/saturation 1.2. Controls retain brighter silver reflections, 8px blur,
Ink lower edges and a faint Orange shadow. Keep vendor-prefixed declarations
before standard equivalents and verify the compiled production CSS.

The standard glass action is the approved Slim rounded rectangle: 52px high,
12px corners, straight sides, 18px/700 label, full content width between the
24px anchors. Buttons in the same family share dimensions. Completion controls
have a 28px visible rim, 22px Orange fill and at least 44px hit area. Their checked
fill has a sheen and no added tick symbol. Remove controls are 8px crosses with
1.5px strokes in 44px targets. Reduced transparency uses opaque faces without
blur/artwork; forced colors must preserve readable text and announced states.

Appearance tokens live under `.circle-os` in `app/os/os-app.css`:
`--os-glass-action-height`, `--os-glass-action-radius`, `--os-glass-panel-radius`,
`--os-glass-panel-blur`, `--os-glass-control-blur`. Typography and spacing retain
their existing shared role tokens. Reuse the Page, button, edit, gesture and
persistence engines. Button Studio experiments do not define product defaults.

### Full-page Note and tool entry - 2026-11-10

The developer approved replacing inline Note with a button-only Today entry and
a full-page App Box. Use Routine/Protocol's `max(344px, 100dvh - 180px)` Page
minimum, plus the shared frame border. Note, its History/Trash and the shared
writing deck grow down for real content; the compact 480px/60dvh ceiling and
inner Body scrolling below are superseded in this opened tool. Its shared
forehead remains 48px; Routine front's 24px exception stays separate.

Back belongs in Note's editor Header with History opposite. New Note stays the
only Footer action. The developer subsequently asked to hide Line access while
deciding how jokes/facts should work; retain their content. Contextual history/Trash returns stay inside the frame. A Line
or neighboring Deep Thoughts retains the temporary outer Back until its own
controls are reviewed. Keep the one frame during manual travel. Today hides the
writing deck from view/focus while keeping it mounted for recovery/measurement.
Future tool Pages follow this full-page direction through their reviewed slices;
Today composition itself remains deferred. See the latest journey evidence.

### Note adoption - 2026-11-10

Account Note now uses the Routine glass family, including History, Trash,
opened writing, deletion confirmation and Note-owned sync surfaces. Writing
stays Bone on dark glass. Headers use 16px/700 sentence case; New Note and
Restore use shared 52px/12px glass actions. History times use 12px metadata.
Orange retains its exact brand value for actions, trash controls and focus.

Panel/action background, border and shadow tokens are shared by Routine and
Note. The account writing deck owns one glass frame throughout Note/Line/Deep
Thoughts travel; neighboring content designs remain pending review. Threads
reuse the existing shell-bounded decoration, with no evidence meaning. Reflect
retains its existing shell appearance after navigation.

Keep Note's compact minimum, 480px/60dvh ceiling, single Body scroller, fixed
Header/Footer, 48px forehead, borderless writing, silent autosave and recovery.
This adoption changes no idle policy, records, onboarding, routes, sync
activation or release gate. See
[verification](../../USER_JOURNEY_TESTING.md#note-adopts-the-routine-visual-standard-2026-11-10).

### Motion and adoption

The Page standard owns the motion table and engine selection. Motion responds
to actions, runs once, keeps words sharp and avoids overlapping faces. Header
light is clipped to letters. Preserve direct reduced-motion paths and existing
interaction availability; decoration never delays an action. Existing page
travel stays quick; staged reveals belong only to genuinely new content.
The brand guide's broad editorial timing range is not a replacement for the
functional interaction timings in the Page standard.

Preserve the shared full-page floor and natural content growth across the six
opened tools, with no nested writing/history scroll panel. For each change measure
Note/Thoughts/Habit/Protocol heights and foreheads, small-screen whole-page fit,
long content, focus/touch targets, motion preferences and relevant persistence.
Record page-specific exceptions explicitly; do not silently create new scales.

## Routine glass, controls and edge anchors - 2026-11-10

Developer-approved trial: soften the shared Routine/Record/Protocol panel's
broad pale reflection, retaining its rim, depth, 24px blur and fixed threads.
New habit/Add task use 64px faces, 24px inside-border side gaps and Geist
18px/700, preserving silver highlights and Orange shadows. Habits-to-Tasks
spacing is 40px; compact rows remain. The 8px Orange cross has 1.5px strokes.
Completion rims use stronger Bone contrast, with their visible right edge at
24px; their 44px hit areas may enter the gutter. The developer explicitly kept
the cross at 24px and row copy 20px farther inward. Header wording aligns to
the 24px anchors as well.

Back/Record retain Geist 16px/400. One 240ms Orange reflection travels through
the letters only: Back right-to-left, Record left-to-right. It begins on press
or keyboard activation without delaying navigation; reduced motion omits it.
Protocol › and ‹ Routine are tappable footer cues using existing switching,
Geist 16px/400, a 4px gap and 24px edge anchors. Forward chevron ends 24px from
the inside right/bottom borders; reverse cue begins at the left anchor.
No new field labels or creation-button Orange sweep. This supersedes the
earlier 48px button height/gutters and 16px creation-label specifications.

## Centered Routine buttons and reversed fades - 2026-11-10

New habit and Add task have equal 48px gaps from the inside App Box border.
Keep their 48px height, 16px/700 labels, glass and subtle Orange shadows.
At a 390px viewport each face is 244px wide. This replaces their asymmetric
alignment to row controls; row text and checkbox columns stay unchanged.

Habit results enter with 300ms ease-in and leave with 300ms ease-out: the
curves are time reversals. The previous ease-out entrance made checked words
readable too early. Keep clean original-word switches, no overlap, the 300ms
geometry hold and 600ms settle. Task fading remains ease-out.

## Mirrored Habit result fades - 2026-11-09

Developer approved matching the Task fade in opposite Habit directions.
On check, original words disappear cleanly and the supplied result fades in
over 300ms. On uncheck, the result fades out over 300ms, then original words
return cleanly. Only one word face is visible at a time: no crossfade, uncover
mask, blur or movement. Both directions hold row geometry during the response,
then settle row/frame height over 600ms. Restored/edit arrivals remain direct;
deliberate unchecking still animates after reload. Reduced motion stays direct.

This supersedes the 100ms hold/200ms uncover. Unchanged Habit words, Task
fade/removal, Record Undo, bold creation labels, Orange shadows, glass, palette
and shared geometry remain as approved.

## Habit result uncover and bold creation labels - 2026-11-09

Developer approved a 100ms hold of the old Habit words followed by a 200ms
top-to-bottom uncover of the supplied result. Keep both faces sharp, Bone and
stationary, with only one set of words visible. The reveal finishes within the
shared 300ms response; row/frame settling remains 600ms afterward. Restored
completed faces and reduced-motion arrivals show the whole result directly.
Unchanged Habit words and Task completion keep their existing behavior.

Only New habit and Add task become Geist 700, retaining their current 16px
size, 48px faces, Orange shadows and glass. Back and Record keep weight 400.
These rules supersede the prior direct switch at 300ms for new Habit results.

## Quiet Routine completion with a shared response - 2026-11-09

Approved: Habit and Task checkboxes respond over 300ms. Habit words remain
sharp until that beat ends, then switch directly to the supplied result at the
same anchor, without overlapping text or a fade. A Habit without result text
keeps its words unchanged, without an opacity pulse. Task words begin fading
immediately over that same 300ms; never strike them through or change their
color. The Task leaves at the end of the response, without the legacy three-
second dwell. Row/frame settling remains 600ms after the handoff. Completion
saves immediately and Task Undo stays available in Record. Returning to saved
completed Habits and reduced-motion arrivals remains direct. Keep the restored
Orange shadows, glass, typography, target sizes and other Page travel.
This supersedes the balanced trial's 700ms crossfade/pulse/fill rules.

## Balanced Routine motion and Orange control shadows - 2026-11-09

Developer approved 700ms text dissolve/ordinary check-off pulse and checkbox
fill, 600ms row/frame resize (including Record), and 300ms clear fade. Hold
row height through the text dissolve before settling. Preserve the existing
curves, stationary text anchors, 500ms new-row fade/100ms lead, direct typing
and reduced-motion behavior. These timings supersede the older slow trial.

Restore the faint Orange shadow on New habit/Add task and Habit/Task checkbox
rims, including Record: 0 3px 9px at 10% brand Orange, retaining current Bone
reflections and Ink lower edges. Pressed faces use the quieter 0 1px 3px/6%
shadow. Targets, face geometry, blur, typography and Protocol control finish
remain unchanged.

## Routine control glass hierarchy - 2026-11-09

Approved: New habit/Add task and Habit/Task completion controls, including
Record, read as clearer glass than their App Box. Use brighter Bone rims,
tight top reflections, transparent centres and subtle Ink lower edges.
Controls use 8px backdrop blur/saturation 1.2; panel retains 24px. Checked
Orange retains its brand base with a light sheen. Preserve 48px creation
buttons, 44px targets, 28px rims/22px fills, spacing, type and motion. Reduced
transparency uses opaque Charcoal faces without filters/fill sheen. Protocol
controls are outside this refinement. Verify production CSS and live preview.

## Shell-edge fade, production glass and smaller crosses - 2026-11-09

Approved correction: the fixed sharp ribbon ends at the outer Circle OS app
shell, not the viewport outside it. Fade the artwork over 16px into the shell
border, respecting its rounded shape. Measure the shell during resize/scroll
so the mask follows the actual border while the background stays fixed. This
supersedes the previous unbounded full-page thread rule; glass alone still
blurs covered portions and threads between the panel and shell stay sharp.

Remove glyphs are now 8px two-stroke crosses with 1px strokes, preserving the
44px target, heading alignment and 20px copy offset. Their visible copy gap
is consequently 12px. Use the same small glyph beside lowercase, uppercase and
number-led names. This supersedes the 12px glyph/8px visual-gap specification.

Put vendor-prefixed declarations before their standard equivalent. The blur
must survive production CSS compilation: a computed source-style pass is not
proof of the served result. Verify minified production CSS and the actual
preview. Reduced-transparency/forced-color fallbacks and frame geometry remain.

## Sharp full-page threads behind glass - 2026-11-09

Developer approved replacing the softened App Box-sized artwork with a sharp,
fixed full-viewport background for opened Routine, Record and Protocol. Reuse
the existing thread ribbon from the bottom edge toward the right edge, crossing
behind the glass. The background stays still while the App Box scrolls over it.
No blur/diffusion/filter belongs on the thread artwork. Only the frame's 24px
backdrop blur softens the strands beneath it; outside strands remain sharp.
This supersedes the earlier 4px diffusion and frame-edge artwork masks.

The thread canvas is a noninteractive root background layer, outside the app
shell and route containers. The ribbon spans the viewport width across its
lower 72%, preserving room above. Opened tools use a transparent shell over Ink.
The route capture and retained opacity-fill layer are released only while tools
are open so glass can sample that background; normal route styling returns on
close. Frame isolation, Page motion timing, typography, spacing and data remain.
Reduced transparency/forced colors hide the artwork, with opaque Ink fallback.
Verify actual rendered glass filtering, not just its computed CSS value.

## Literal Record fields, compact rows and deeper glass - 2026-11-09

Approved follow-up supersedes the earlier wide remove column and sharp surface
thread. Record shows saved Habit name, time/location and result on separate
lines, using the same 18px/700 primary and 16px/400 secondary roles as Habit
entry. Omit empty fields. Never add sentence framing around the person's words.
Text-only legacy records retain their original text; do not infer missing parts.

The Orange remove icon is a balanced 12px cross drawn from two strokes. Its
glyph starts at the section heading's left edge; copy begins 20px after that
edge, leaving an 8px visual gap. The real 44px target extends 24px into the
existing Page gutter, ending at the copy's start without overlap. Creation
buttons start at that target's end and stop at the completion target's start.
Keep the shared type/spacing grid, targets, completion behavior and frame
minimums. Record keeps first-line Undo alignment and read-only past fields.

The thread lives on the Routine/Protocol background outside the glass frame,
with 4px diffusion. The frame above it has 24px backdrop blur, 1.2 saturation,
more translucent shading and a clearer Bone rim. Artwork remains still while
Pages move. Reduced transparency uses opaque Ink without thread/blur; forced
colors also omits the artwork. Existing palette and motion timings stay.

## App-wide typography and spacing rules - 2026-11-09

These developer-approved rules govern all functional Circle OS surfaces,
including writing, reading, lists, records, setup, account controls and Admin.
They supersede earlier app type scales, intermediate weights, 29px editable
titles, 25px body gaps, 18px layout gaps and Routine-only scope statements.
The public site and `/brand` retain their editorial scale.

- Use Geist. Use only normal (400) and bold (700); normal for prose/secondary
  text and bold for headings and meaningful emphasis.
- Use four semantic sizes: heading 28px, body/primary content 18px, secondary/
  controls 16px, metadata 12px. Habit name/result and Task text are bold;
  time/location is normal secondary text. Reading and editing use matching
  roles. Placeholders inherit their field's family, size, weight and leading.
- Use shared `--space-*` tokens for layout gaps, padding and margins. Values
  are multiples of 4px: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 96; use 8px
  steps for larger groups. Main-to-Sub and Body-to-Footer are 24px. App-to-App
  spacing is 16px. Do not invent fractional rem gaps or one-off 25px values.
- This is a layout rhythm, not a rule for type leading/tracking, borders,
  shadows, gesture positions, safe-area insets, or measured control-centering
  calculations. Preserve at least 44px touch targets and existing frame floors.
- Record and Habits share Bone content, 28px/700 section headings, 18px/700
  primary wording, 8px list gaps and a 24px header-to-content anchor. Record
  has no legacy dimming/dividers. Today's Undo remains; past records stay read
  only. The tiny Orange x sits visually 8px before editable row text while its
  target remains 44px; align the glyph toward the target's text-side edge.

App roles and legacy aliases live under `.circle-os` in `app/os/os-app.css`;
spacing primitives live in `app/tokens.css`. Do not change public typography
tokens to fix an app feature. `tests/app-design-system.test.mjs` rejects raw
app type/weight drift and off-grid static layout spacing. Browser checks audit
computed text/placeholder styles and actual geometry rather than tokens alone.

## Routine field hierarchy and clear controls - 2026-11-09

Developer approved a Routine-only Geist scale with four sizes and two weights:
28px/700 section headings; 18px/700 Habit names, results (the existing identity
field), Task text and Record wording; 16px/400 time/location, navigation and
creation buttons; 12px/400 dates/supporting details. Placeholders inherit their
field's exact metrics and share muted Bone at 65% opacity. This supersedes the
18px/540 uniform-field rule below. Other tools retain their existing scale.

Each editable Habit/Task row has a tiny 12px Orange x on the left, with a 44px
target and an accessible Clear label. Completion stays on the right. Clearing
archives the record in one click; historical completion evidence is retained.
Clearing a just-completed Task ends its visible exit while preserving Record.
Keep the existing 8px row gaps, motion and shared App Box floors/anchors.

## Unified Routine typography, feedback and Record - 2026-11-09

Approved: Habit action/cue/identity content matches Tasks at 18px/540 and
1.3 line height. Both section labels keep the same 28px/700 style. Derive the
first-line checkbox alignment from that shared content scale. Ordinary habit
completion retains its words and anchor, with one 1400ms Bone-opacity pulse
(1 to 0.65 to 1). Identity changes retain the stationary Bone dissolve.
Restored completed rows do not replay feedback; reduced motion stays direct.

Approved compact follow-up: Habit/Task inter-row gaps are 8px, retaining the
44px touch targets and existing typography. Record has only Back in its header;
the redundant right-hand Record label is removed. Motion investigation is
deferred to the next task; no motion rules change in this follow-up.

Routine has one Record page: Back at left, today's Undo rows
first, then dated past entries newest first. Past snapshots remain read only.
This supersedes the separate History page. Its legacy identifiers remain for
compatibility. Routine's App-back frame resize now uses its local 1800ms
growth timing, rather than the shared 440ms default. Other apps retain their
timing. Remove only confirmed redundant Routine rules, preserving shared CSS.

## Anchored Bone text and deliberate height motion - 2026-11-09

Developer approved replacing the prior Routine effect after lived review.
Checked text stays Bone. A habit without identity keeps its original editable
action/cue in place, with no text swap, strikethrough, blur or completion motion.
Only a supplied identity replaces words: both faces crossfade together over
1400ms, without blur, delay, translation, scaling or a nearly empty interval.
Keep identical font metrics and a shared first-line anchor. Remove the legacy
checkbox-state offset on the entire copy block and completion-dependent
centering. The checkbox remains aligned with that first line.

Hold the row's height during the identity dissolve, then settle spare space
over 1800ms. Measure the actual 44px row floor in the target so it does not
visibly finish early. Opening/restoring completed faces is direct; undo cancels
the hold. Frame growth and reduction use the same 1800ms local curve, including
small structural changes near the minimum. Actual typing follows directly;
an already settling row supplies the frame's geometry without a second height
animation. The Orange disc fills over 1400ms inside the existing glass inset.
Reduced motion stays direct. Existing glass, palette, row spacing, shared page
travel and saved records are unchanged. These rules supersede the blur trial.

## Routine blur handover, inset fill and spacing - 2026-11-09

Developer approved the full Routine pass. Completion's outgoing words fade
and blur over 300ms; the completed face starts at 220ms and sharpens/fades in
over 1000ms, with an 80ms overlap and no upward travel. Completed identity or
habit action is brand Orange. With no identity, retain the original action and
any location/cue on the completed face; keep the cue quieter in Bone. Remove
habit strikethrough. Deliberate editing opens the original fields; undo is
quick and existing completed arrivals show directly without replay.

Checkboxes keep their 28px glass boundary and 44px target. A separate Orange
disc grows over 900ms from the centre to 22px, leaving 3px inside the boundary.
The boundary retains its glass reflection and Bone stroke. Habit/Task lists
use 24px clear inter-row space instead of dividers. Frame/copy growth takes
1200ms with a gentler local curve; rapid growth still retargets from the visible
edge and headings stay anchored. Reduced motion removes blur and travel and
shows the final state directly. Other shared page travel and saved records
remain unchanged. This supersedes earlier Routine trial values below.

## Slower, staggered Routine motion - 2026-11-09

Developer approved slowing the Routine trial and adding small reveal leads.
This supersedes the trial timings below: identity fades/rises 8px over 750ms,
starting 80ms after completion; frame and habit-copy growth take 700ms;
control press/release take 150/400ms; Orange fill takes 350ms. Press feedback
and growth start immediately. New Habit/Task rows fade over 500ms after 100ms.
New-row animation belongs only to creation, never restored records.

The existing App Box engine reads Routine's local growth timing. Rapid changes
retarget from the visible edge and continue to the final content size. Keep
the heading anchored and prevent focus from scrolling the clipping frame.
Typing outside an active expansion still follows the caret directly. Reduced
motion shows rows/identity directly and skips JavaScript frame growth. Keep
the existing palette, glass, geometry, 44px targets, shared page travel,
records, completion/undo and edit behavior. This remains a visual trial.

## Routine motion trial - 2026-11-09

Developer approved a more visible Routine identity reveal: 450ms opacity/8px
rise, starting immediately with completion and the existing height transition.
This supersedes the 300ms/4px values below for opened Routine only. Undo stays
quick; existing completed arrivals and editing do not replay the reveal.
Reduced motion removes travel and shows the state directly.

Routine creation buttons press inward by 2px with slight compression and a
softer reflection, then release over 220ms. Completion bubbles compress to
86% while pressed and smoothly return as their Orange fill appears. Animate
the visible bubble only, retaining its fixed 44px hit area and existing shared
button lifecycle. Cancellation restores the uncommitted state. The App Box,
page travel, type, spacing and records are unchanged. This is a trial awaiting
developer visual review, not a new app-wide button standard.

## Habit completion and flowing corner threads - 2026-11-08

Approved: the completion control is not an editor. Focus on it must not expose
empty cue/identity placeholders or prevent the identity reveal. Completed
habits without identity show only the supplied action and any supplied cue.
Actual text editing still exposes the optional fields. With a supplied identity,
completion immediately starts a 300ms opacity reveal with 4px upward travel,
alongside the row height transition. There is no completion pause or settling
gate. Undo restores the action. Returning/reloading
an already completed habit shows its identity directly, without replaying it.
Reduced motion removes travel and uses the existing near-zero duration rule.

The developer's attached flowing-thread reference guides the corner fragment:
twenty-four fine intertwined curves form a small ribbon-like bundle. Smooth
cubic joins and rounded strokes replace angular turns; the bundle flows
naturally behind buttons rather than bending around controls. Keep the 7px border-only fades,
Circle colors and existing glass. This supersedes the earlier twelve-curve
geometry. The artwork is decorative, not a personal-data visualization.

## Routine headings and glass finish - 2026-11-08

Later approved refinement: Routine's front Page uses a 24px Header-to-Habits
gap, half the previous 48px. Record, History, Protocol and other Pages keep
their existing gap. Habits and Tasks are real level-two section headings,
28px/700 in Geist. Other row/control sizes and equal 24px padding remain.

The developer approved a further glass increase: stronger edge/button
reflections and a 16px backdrop blur, retaining the faint Orange App Box shadow
and quiet text area. Twelve irregular threads remain visible along their
curves and fade only within the final 7px where they meet the bottom/right
frame border. This supersedes the rejected long fades along each strand.
Keep rounded ends, the palette exact, text sharp and
the center quiet. Reduced transparency removes blur and thread artwork. These
details supersede the earlier front-page gap and corner treatment below.

## Approved refinement rules - 2026-11-08

Text entry is borderless throughout Circle OS, including new and focused
fields: no filled input rectangle, border, inset shadow or rectangular focus
outline. Preserve readable labels and a visible caret. Buttons and non-text
controls retain visible keyboard focus. Do not reintroduce text boxes in later
pages. All shared App Pages use 24px padding on all four sides. Header controls
must align their actual text on the same baseline with consistent spacing.

For Routine/Protocol, the developer approved 28px visible completion bubbles
inside unchanged 44px touch targets; 48px creation buttons with 18px type;
32px between Habit/Task sections; 12px between lists and creation controls;
12px row padding; and the existing 48px forehead. Use twelve tightly packed,
irregular, partly overlapping lower-right strands. Try only a faint Orange
shadow under the glass buttons; Back/Record remain Bone pending review.

Remove Focus from Record without deleting stored values. Hide the temporary
Today/Reflect navigation within opened tools; a new bottom navigation is the
next task. Past phases show outcome and period without the days-kept sentence.
Terms show wording and compact counts, without repeated dates; retain missing-
legacy-wording disclosure where needed. Saved history remains unchanged.
These later approved rules supersede contrary presentation details below.

## Routine and Protocol full-page refinement - 2026-11-08

The developer approved implementing the selected Routine/Protocol concepts by
changing the existing components and styles. These tools are the scoped
exception to the solid, compact surfaces described below: one smoked-glass
App Box, existing Circle colors and Geist, clean glass creation buttons below
the lists, symbol-free Orange completion bubbles, and four fine threads only
at bottom right. The phone mockup is not part of the application.

Today opens the existing shared Routine/Protocol player in a full-page view.
Back returns to Today; manual swiping and keyboard navigation reuse the shared
engine. Record, History, inline Habit editing and the existing completion-to-
identity transition remain. Routine's editable focus is under Record > Focus.
Protocol preserves setup, terms, prospective edits, sealing and phase records;
the overall totals row is removed. Each past phase keeps its own counts/dates.

These two tools share a viewport-based minimum and keep the 48px forehead.
Real content and their histories grow downward without an inner scroll panel.
Note and Deep Thoughts retain their compact/bounded geometry. The existing
Today/Reflect routes remain; Home, Explore and the final navigation icons belong
to later slices. Details and selected references are in
[the page-design record](PAGE_DESIGNS.md).

This is the repository design guide for The Circle website and Circle OS.
Together with `app/os/APP_SESSION_STANDARD.md` and `app/brand-system.ts`, it
replaces the requirement for unavailable external design notes. No missing
note's contents have been inferred. Product direction and open design conflicts
are recorded in `docs/PRODUCT.md` and `docs/DECISION_LOG.md`.

The live human-readable brand guide is `/brand`. The code tokens live in
`app/brand-system.ts`; Circle OS behavior details live in
`app/os/APP_SESSION_STANDARD.md`.

## Core idea

**Whole. Human. Alive.**

The interface should feel like a calm editorial object that happens to be
useful. It is a mirror, not a dashboard. It should help a person notice life,
not pressure them to optimize it.

## Foundations

- **Awareness:** show what is actually happening.
- **Presence:** make today's life feel worth noticing now.
- **Contribution:** invite honest input instead of extraction.
- **Living culture:** keep the system adaptable and human.

## Color

| Token | Value | Use |
| --- | --- | --- |
| Bone | `#F1EFE8` | reading, openness, calm primary pages |
| Ink | `#191813` | foundation, type, focused depth |
| Orange | `#E36B37` | identity, action, living attention |
| Charcoal | `#403E35` | structure, dividers, secondary text |

Use solid surfaces. Avoid gradients and decorative color noise. The three App
Box themes are Light, Orange, and Dark. Theme changes must preserve the same
geometry and hierarchy.

## Type

- **Geist:** all app labels, prompts, inputs, buttons, data, and functional UI.
- **Cormorant Garamond:** outer editorial headings only, such as section or
  route titles.
- Main app text is bold, direct, and easy to read.
- Supporting text is short and quieter, but never faint enough to feel broken.
- Editable reading surfaces use 29px titles/questions and 18px
  content/answers. This covers account Note/Deep Thoughts and opened history/trash
  entries, Athena's reply editor, Vision declarations, Week goals/steps, and
  Chapter short/long text questions with their matching Workshop preview.
  Retain existing weights and line heights; use the shared spacing below.
  Lists keep their compact row scale. Reading-only lessons, covers, Athena prose,
  Quest descriptions, locked-app explanations and Protocol summaries retain
  their existing typography. This developer-approved refinement supersedes
  the shared Cover/Note/Chapter size statements below for these editable surfaces.
- Do not shrink type to fit content. Let the body grow or scroll.
- Write at a fourth-grade reading level whenever possible.

## Layout

- Saved copies/current Note refinement (2026-11-06): after resolution, show the
  live current note above immutable retained Cloud/Device snapshots. Its history
  reads the current ledger; archived histories keep their original words. New
  notes remain in normal History. Hide scrollbar chrome across all bounded
  writing Pages (Note, History, Trash, detail and Sync), retaining Body scrolling,
  visible Header/Footer and the existing cap.

- Sync controls (2026-11-06): label the History action Sync, and show it only
  for pending saved work, unresolved copies or recoverable errors. Drafts and
  completed syncs alone do not keep it visible. Try again appears only after
  an error and disappears while retrying or after recovery. Retained Cloud/
  Device histories remain reachable through Saved copies on their Note History
  row, independent of Sync visibility. Opening the Note itself still edits it.

- Writing sync refinement (2026-11-06): match Note typography and borderless
  content. Compare Cloud then Device with no explanatory heading, dates or
  history buttons. Tapping a copy opens its dated read-only history through
  shared App-back. Stack Note's default CreativeButton actions: Use Cloud above
  Use Device. Hide only the scrollbar chrome; Body still scrolls and Footer
  stays visible. Return silently to the list after confirmed success. Show
  only brief pending/error text when action is needed. This supersedes the
  earlier comparison presentation below; retained histories remain intact.

- Writing sync (2026-11-06): open a separate Writing sync Page from writing
  History. Keep normal Note autosave silent and keep save/sync labels out of
  the global header. Compare This device and Cloud copy vertically, show dates
  and active/Trash state, and make the current-copy choice explicit. Retained
  histories remain readable. Reuse shared App-back travel, Geist, orange actions,
  44px targets and the existing bounded writing Body; the Footer stays visible.

- Account controls (2026-11-06): a three-dot button sits at the top right of
  the existing Circle OS header. It opens Edit alias and Sign out in a menu
  sized to its labels, with equal space around the longest label. The alias
  editor retains enough width for its field. There is no
  separate account row or Saved/Synced status in the header. Keep 44px targets,
  keep the alias in the greeting and wrap long aliases there.
  Account access remains reachable during full-screen onboarding.
  Menu actions use Geist at the existing 650 control weight.

- Approved spacing refinement (2026-11-03): the shared label-to-content gap is
  48px; Main-to-Sub and Body-to-Footer gaps are both 25px. This supersedes older
  spacing statements for these values. Preserve the shared App Box minimum and
  downward growth. Note/Deep Thoughts Trash detail omits “In Trash” and its
  divider; Restore and Delete forever have a 4px layout gap and retain touch targets.

- Mobile first, with 24px as the normal phone gutter.
- Prefer centered containers and stable editorial alignment.
- Desktop may use a two-column layout with a calm 2:1 visual weight when the
  content benefits from it.
- Respect the rule of thirds in composition without drawing a visible grid.
- Minimum touch target: 44px.

## Chapter delivery

- A published chapter cover appears directly inside its assigned App Box.
- Note opens on its editable front. Its label flips the same App Box to a
  Line (a quote, fact, or joke); it does not recall a Chapter. New deliveries
  that previously belonged to Note use Deep Thoughts (internal `thoughts`). Preserve legacy immutable
  Note publications, their versions, and saved records as required by the
  [Page standard](APP_SESSION_STANDARD.md#state).
- Thoughts, Habit, Log, Vision, Week Review, and Athena use one-time deliveries
  in this testing release. After completion or dismissal, their ordinary App
  content returns and the chapter is not recalled from the mode label.
- Private publications stay on that browser and work offline. Public
  publications use immutable Markdown sources through the connected Circle OS
  server and are cached on the device.
- A chapter id and version identify one immutable publication. Editing a
  published chapter requires a new version.
- Avoid nested cards. One visual surface should read as one object.

## App Box

An **App Box** is the stable rounded frame. A **Page** is the sheet that moves
inside it.

```text
Session
  App Box
    Header
    Heading
    Body
      Main Body (about 2 parts)
      Sub Body (about 1 part)
    Footer
```

- The App Box owns radius, clipping, border, shadow, theme, and height change.
- Pages never add a second outer card.
- The App Box starts as a compact rounded rectangle and never contracts below
  the shared default minimum. Empty and short Pages rest at that size. Real
  content may grow the frame downward, including Routine rows and Protocol
  terms. One set of tokens owns the minimum, padding, drop to the first line,
  Main-to-Sub gap and Body-to-Footer gap; an App does not restate them.
- Account Note and Deep Thoughts are the approved bounded-growth exception:
  their writing, History and Trash Pages
  grow from that minimum to a 480px App Box ceiling, reduced to 60% of the dynamic
  viewport on short screens, never below the shared minimum. Only Body scrolls
  past the ceiling; Header, Heading and Footer remain in place. Expanded
  Protocol Past phases uses the same ceiling and Body scrolling. Routine and
  draft/running Protocol keep their continuous downward growth.
- Main content begins at the shared forehead anchor for every line count. It
  never recentres as text changes; a fourth and every later line grows the Page
  downward after the ordinary three-line height budget is used.
- Optional Sub Body content hangs directly beneath Main's last line. It is not
  part of Main's height budget and never moves Main.
- One written line costs one line of App Box, and the gap between the last line
  and the action stays the same as the box grows. On Cover, Note and Thoughts
  the two-to-one weight of Main and Sub is where the eye lands, not a
  reservation: an absent Sub Body takes no room at all.
- Real added rows may extend a fluid App Box without colliding with the Footer.
  Habit tasks stay visible in one continuous Sub Body rather than an inner
  scrolling panel.
- Draft and running Protocol terms follow the same continuous-page rule and
  grow downward. Expanded Past phases is the approved history exception: its
  Body scrolls at the same 480px/60dvh frame ceiling as Note, never below the
  shared minimum. Header and Footer stay fixed. Past terms show compact counts
  such as `1/7`, without white row dividers; each phase keeps its title, full
  days-kept summary, dates and separation from other phases.
- Repeated habits use that same continuous stack: one quiet divider and one row
  rhythm per habit, with no nested card or doubled spacing.
- Empty optional regions collapse cleanly and leave no dead gap.
- A Page puts its content in Main Body and Sub Body. Loose children fall into
  the Body tracks by position and get stretched by them.
- Where an App carries its weight in Sub Body, as Habit and Protocol do, both
  tracks size to their content instead of holding the two-to-one weight.

## Reflect

Reflect is where a person reads about their life. It has three parts: the life
you want, the life you are living, and the space between. Athena's voice runs
through all three rather than sitting beside them.

The wanted life has distinct records: Vision names the life, Character names
who the person is becoming, Mission names how they intend to live, Typical
Tuesday shows an ordinary day there, and Six months names a nearer milestone.
Routine identity is a short daily focus and habit identity belongs to one
habit. Neither silently replaces the versioned Character. Dreamline remains a
separate finite plan.

The current Vision surface still shows Vision, Mission statement, and Typical
Tuesday. Adding Character and Six months to that surface requires a separate
review of their Pages; the data authority decision does not invent that UI.

Her reading is published as dated editions that accumulate in state. Reflect
keeps the current four-Page reading. The cover's Athena's Reading label opens
read-only History through shared App-back in the cover slot, rather than
adding another swipe Page. A dated list opens each edition's saved prose;
missing parts stay empty rather than borrowing today's observations. Back
returns to History then the current cover. History grows downward within the
existing frame. A morning that says the same thing publishes nothing.

The latest authored Reading may end with a real question and accept one reply
as evidence. Week Review is local arithmetic: its seven Pages hold a cover, a
recurring daily pattern, four distinct parts of the day, and what held or did
not hold during the week. Its counts stay in local working except when a count
is itself the point of the final week Page.

## Page types

### Cover Page

- No header labels.
- One main hook.
- One optional short subtitle.
- Footer cue: `Swipe to begin` or `Swipe to see`.
- Never editable.
- Main text retains the shared Cover type token and top anchor. Editable Note
  and Deep Thoughts share that anchor with their own 29px main-text size.

### Chapter Page

- Header has progress on the right only.
- Main Body contains one question or lesson. Short/long text questions use 29px
  main text and 18px supporting copy/answers; the Workshop preview matches.
  Other types retain their existing scale. All retain the shared forehead anchor.
  Confirm and Result keep their own closing anchor.
- Sub Body contains one interaction: choice, slider, short input, or paragraph.
- Footer contains the full-width Continue or Confirm action.
- A choice, slider, or short answer stays at the default App Box height. Grow
  only for real content such as a paragraph, never for empty form space.
- Note, Thoughts, short Chapter, and empty Habit Pages share that same default
  App Box height. A feature does not invent its own empty-state height.
- Short and paragraph answers are borderless editable typography. Do not draw
  a field box or underline around the answer.

### Note Page

- Account Note uses NOTE on the left and direct HISTORY navigation on the right.
  Both labels share typography, baseline and 44px touch targets. Labels,
  navigation and text actions use Circle Orange (`#E36B37`); authored title and
  body stay Ink. Use Geist, the shared minimum and forehead, and 44px targets.
- Main and Sub both take unlimited writing. Account Note scrolls its Body after
  the shared Note ceiling; writing length itself is not limited.
- Header shows the app label or app action.
- Main text uses the same forehead anchor as a Cover Page. Optional Sub text
  follows Main at the shared gap without moving it.
- Text can be edited directly with its display typography.
- Keep the borderless writing surface. Account Note saves after a short typing
  pause and when leaving; it has no Save, Clear, Discard or Drafts controls or
  draft messages. Writing fields have no focus outline or box; the text cursor
  remains. Save silently, with failure alerts when needed. Local recovery
  remains automatic behind the scenes.
- HISTORY opens the list directly. Note has no Versions controls or screens.
  History groups entries by Circle day, shows times, opens writing directly for
  editing, and carries Trash in the header. The full-width New Note action lives
  in the Note editor Footer and saves the current text before opening a blank Note.
  Each editable local Note row has a Circle Orange trash-bin button on its right.
  That button moves only its Note to Trash, without a Moved to Trash message.
  There is no Note Undo action;
  restoration happens from the Trash page.
  Trash detail keeps the title/body hierarchy with Restore and Delete forever.
- Selecting and deleting all text saves an empty correction of an existing Note;
  internal revision records remain for save/conflict safety. Untouched empty
  composers create no saved entry.
  Thoughts and reading answers retain Send and their draft workflow. The legacy
  single-Note editor remains separate pending migration. See the
  [writing journeys](PERSONAL_RECORDS_AND_ATHENA_PLAN.md#5-writing-journeys).

### Deep Thoughts Page

- Uses the Info Page geometry.
- Inviting editable typography in the body.
- Its question uses the same 29px size as Note Main text, with 18px answers.
  Existing weights, line heights and forehead anchors remain.
- Question in Main, answer in Sub, with a full-width black Send action.
- Keep an accepted answer visible; Next question advances only on a deliberate
  press. Corrections use Save changes and preserve the original question.
- Recover unfinished answers silently. Omit routine saving/sent and
  recovered/discarded messages and the Discard draft control. Clearing the answer
  clears its recovery text; keep actual save errors visible.
- Match Note's direct HISTORY/header baseline, orange navigation and row bins,
  dated grouping/times, silent trashing, Trash/Restore and confirmed Delete forever.
  Reuse its bounded Body scrolling and shared resting geometry. Internal revisions
  remain; Versions UI and Undo are absent from this surface. Recovery stays local
  and unsent rows are marked Unsent. Reading-answer embedded controls stay separate.
- Its label flips to one quote from the managed catalog. Return to the same
  question and answer, with existing Line swipe/reaction exits. Keep quote travel
  on the shared App-back engine; quote reading has no timer or question advance.
- Ordinary Thoughts is retained as a historical record kind, including correction;
  it has no new-writing composer in Today. Legacy sources remain read only.

### Blog Page

- Title, divider, and short paragraph sections.
- Athena Reading is the reference.
- Reading rhythm matters more than packing information into one viewport.

## Motion

- Everyday page travel should respond quickly enough for consecutive swipes.
- A new cover reveal is ceremonial: old page fades, solid surface settles, then
  text appears in sequence.
- In-place app mode changes reuse that reveal instead of swapping instantly.
  Thoughts to Deep Thoughts is the reference transition.
- Only newly updated content receives that reveal. Returning to a known Page
  must not replay entrance animation.
- Frame height eases only after a Page transition finishes.
- Required-input feedback uses a brief, clear head shake of the text layer.
- Respect reduced-motion preferences.
- The page moves; the App Box does not.
- Only the Today Note/Thoughts session turns its pages after the shared
  `IDLE_PAGE_DWELL_MS` dwell. Two-page facts and jokes on its Line side may
  also turn; a single-page quote has no next Page to turn to.
- Routine, Protocol, Log, Vision, Week Review, and Athena stay on the chosen
  Page. Journeys, Chapters, and pending publications never rotate.
- The idle dwell restarts on touch or key input, waits out focus and a part
  written Thought, and never runs in the background. See the
  [Page standard](APP_SESSION_STANDARD.md#idle-rotation).
- Every action runs through the button engine. A feature does not draw its own
  button or its own checkbox.
- Where an action cannot go through the engine, it is still the same key. See
  **Buttons** below.
- One style may break instead of pressing. Fractured Glass takes four strikes:
  the first three only crack it, and the last one shatters the button and the
  surface behind it. Breaking it is the action, never a delay before it.
- A breaking button is a reward, not a toll. It appears when the person has
  written a real sentence; a single word keeps the ordinary press.

## Buttons

Circle OS has one pressable object. A face raised on a solid leg, lit along its
top edge, that drives flat onto the surface when pressed and comes back up a
little slower. Row ticks, Protocol terms, the button engine's default style and
every full-width Page action are the same key at different sizes.

- The recipe is the `--os-key-*` tokens in `app/os/os-app.css`. A control names
  its size and its leg colour and gets the rest. Nothing restates a shadow.
- Sizes are lifts, not heights: 4px, 3px, 2px. The leg is exactly as tall as the
  lift, so a press removes both and the face lands where the leg was.
- Legs are never blurred. A blur reads as floating; these are seated in the box.
- The top light is drawn only where it can be seen: strong on a light or orange
  face, soft on Ink, absent on a Bone face. The absent value is a transparent
  shadow, never `none` — `none` is legal only as a whole box-shadow and voids
  the leg with it.
- Down is near instant. Pressed and held states are sunk, so the light comes
  from inside the hole rather than off the top edge.
- A ghost control is not a key. A dotted invitation such as Add task stays flat,
  because a control that presses like a commitment claims to be one.
- The rotating bag of button styles belongs to Button Studio. The App sends with
  the standard key.

## Dreamline

Hidden for v1 behind `SHOW_DREAMLINE` in `app/os/circle-os-shell.tsx`. The
record, the model and the Pages are untouched, so returning to it is a flag
rather than a migration.

- Log currently has a daily timeline and a Week Page; neither idle-rotates.
- Disabled Dreamline idle/sheet Pages are conditionally attached to the Routine
  session in current source, not an enabled sequence behind Log. Older
  Setup/Having/Being/Doing/Income and Now/Tomorrow/Day After layouts are historical,
  not instructions to rebuild or enable them. Future placement needs review.
- Being requires the Doing that proves it. Only starred lines receive steps
  or enter the income calculation.
- Dreamline is dated, costed and finite. Vision declarations remain separate
  and timeless.

## Content and AI

- Ask one thing at a time.
- Prefer one tap, one slide, or one clear text response per Page.
- Do not repeat the same question in different words.
- Athena reflects on evidence, expresses uncertainty, asks open questions, and
  offers feedback and motivation tied to the person's own goals. The person
  decides how to live. See `docs/PRODUCT.md` for the intended AI role and the
  distinction between current prepared content and planned server-side AI.
- Oscar may be playful later, but must not blur truth or consent.
- Weekly views show real recorded life. AI interpretation belongs in Athena,
  clearly separated from observed data.

## Taste skills

Project-local design skills live in `.agents/skills/`. Use them for critique,
reference generation, and craft checks. Circle's own identity and the App Box
standard always win when a generic skill recommends a conflicting layout,
typeface, motion pattern, or interaction.

## Admin previews use the production App Box contract

- Runtime, Chapter Workshop, and Button Studio use one responsive width rule:
  the bounded parent owns width and content may only grow the box downward.
- Choice interactions use one full-width option per row so authoring preview
  and published behavior cannot diverge on phones.
- Button Studio uses the shared Page anatomy. Its `Background` control lives
  in the Page Header, while the preview button stays mounted in the Footer.
- Button motion prompts are local draft metadata exported for Codex. They do
  not call AI or generate assets in this version.

## App modes and publications

- The top-left app label is a mode control, not navigation. Note opens its
  Line back; Deep Thoughts opens a Quote; Habit
  cycles Habit, Habit Record, and Habit Tracker.
- A Line does not dismiss itself on a timer. Swipe backward past its first
  Page to return to Note. Swiping forward past its last Page reveals reactions;
  choosing a reaction or swiping forward past the end again returns to Note.
  Its kind label is text, not a Note return button.
- A publication version targets exactly one app and one audience. Private work
  stays profile-scoped. Public/global work always requires explicit approval.
- The visible product tab is **Reflect**. Vision remains the inner white app
  about the life the person wants.
- Page refresh choreography is Body, Header, Footer. The background never
  blinks or remounts between those text layers.

## Secret Admin and authoring library

- Admin has no public tab, shortcut, or login page. A reserved phrase entered
  through a fresh Deep Thoughts answer opens a password prompt in the same Page. The phrase is a
  hidden doorway, not the password itself. The password lives only in the
  server-side CIRCLE_OS_ADMIN_CODE environment setting; there is no fallback
  password, and missing or too-short configuration keeps Admin locked.
- The reserved phrase and admin password are intercepted before thought
  persistence. Neither is saved as profile evidence or uploaded with normal
  Thoughts.
- A successful unlock uses an HttpOnly, SameSite=Strict browser-session cookie.
  The signed session expires after eight hours, and direct unauthorized Admin
  visits return quietly to Today.
- Chapter Library groups follow the fixed authoring classification order:
  Foundation, Short, Guided Learning, Reflection, then Information. Empty
  groups stay hidden; free-form category metadata remains searchable.
