> Historical snapshot preserved on 2026-11-11 before the approved documentation cleanup.
> This records earlier decisions, proposals and verification; it is not current instruction.
> Start with the [active document map](../../../README.md#project-documents) and
> [archive index](README.md) for the current replacement.

# Circle OS mobile test findings

Reported by the developer on November 6, 2026.

These are observations from mobile use, saved for later review. They have not
been independently reproduced in this documentation task. A possible UI redesign
may make some findings outdated; check them again against the next design before
planning fixes. This record does not approve implementation or change existing
product decisions.

## 1. Long Note typing loses the visible cursor

Once a Note is long enough to scroll, the keyboard covers almost half the screen
and the user cannot see what they are typing. Pressing Enter brings the cursor's
position into view, but typing again returns the view to the top of the Note,
where the title is.

Desired result for later review: keep the current typing position visible above
the keyboard while writing a long Note.

## 2. Note and Deep Thought switch automatically

After some time, the Note and Deep Thought Pages switch automatically.

Status: recorded for reconsideration during design review. The current
[idle-rotation rule](APP_SESSION_STANDARD.md#idle-rotation) allows these
Pages to turn after the shared idle dwell, with guards for focus and interaction.
This report alone does not establish whether those guards failed or whether the
allowed switching itself should change.

## 3. Habits show and strike through an empty time/location placeholder

In Routine, create a habit with only the habit field filled in. The empty
time/location still shows the placeholder "At time/location," which looks ugly
in the displayed habit. When the habit is ticked off, the completion animation
strikes through both the habit and that placeholder.

Desired result for later review: an unset time/location should not appear as
habit content or receive a completion strike-through.

## 4. Three-dot menus remain visible during Chapters

While doing a Chapter, such as setting the week, the three-dot menu buttons
remain visible.

Requested change for later implementation review: hide the menu buttons during
Chapters.

## 5. Week goals can be completed before their steps

After adding a goal and a step toward it in Week, the user can tick off the goal
without ticking off the step. The step disappears with the completed goal.

Open question: should users have to complete every step before they can complete
the goal? The developer is still deciding. No completion rule has been chosen.
