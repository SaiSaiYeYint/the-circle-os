import assert from "node:assert/strict";
import test from "node:test";

import { createEmptyState } from "../app/os/circle-os-model.js";
import {
  WEEK_BAR_LENGTH,
  WEEK_DAY_LETTERS,
  WEEK_ROLLOVER_HOUR,
  planningWeekStartKey,
  weekBarDays,
  weekCoverLine,
  weekDays,
  weekSpan,
  weekStartKey,
  weekTotals,
} from "../app/os/week-app-model.js";

// 2026-08-26 is a Wednesday.
const WEDNESDAY = "2026-08-26";

function stateWith(days = {}, habits = []) {
  const state = createEmptyState();
  for (const [index, action] of habits.entries()) {
    state.habits.definitions[`h${index}`] = {
      id: `h${index}`,
      text: action,
      status: "active",
      createdAt: `2026-08-0${index + 1}T00:00:00.000Z`,
    };
  }
  for (const [dateKey, day] of Object.entries(days)) {
    state.days[dateKey] = { ...state.days[dateKey], date: dateKey, ...day };
    for (const habitId of day.kept || []) {
      state.habits.completions[`${dateKey}:${habitId}`] = { completed: true };
    }
  }
  return state;
}

test("the week runs Monday to Sunday around whatever day it is", () => {
  assert.equal(weekStartKey(WEDNESDAY), "2026-08-24");
  const days = weekDays(createEmptyState(), WEDNESDAY);
  assert.equal(days.length, 7);
  assert.equal(days[0].dateKey, "2026-08-24");
  assert.equal(days[6].dateKey, "2026-08-30");
  assert.deepEqual(days.map((day) => day.letter), [...WEEK_DAY_LETTERS]);
  // A Monday belongs to its own week, not the one before it.
  assert.equal(weekStartKey("2026-08-24"), "2026-08-24");
  assert.equal(weekStartKey("2026-08-30"), "2026-08-24");
});

test("today and the days not yet lived are marked, not counted", () => {
  const days = weekDays(createEmptyState(), WEDNESDAY);
  const today = days.find((day) => day.isToday);
  assert.equal(today?.dateKey, WEDNESDAY);
  assert.deepEqual(
    days.filter((day) => day.isFuture).map((day) => day.dateKey),
    ["2026-08-27", "2026-08-28", "2026-08-29", "2026-08-30"],
  );
  // A Thursday that has not happened is not a Thursday that was missed.
  assert.equal(weekTotals(createEmptyState(), WEDNESDAY).days, 3);
});

test("a day counts only what the person actually put in it", () => {
  const state = stateWith(
    {
      "2026-08-24": { kept: ["h0"], timeBlocks: [{ start: "09:00" }] },
      "2026-08-25": { title: "Long one" },
    },
    ["Walk", "Read"],
  );
  const days = weekDays(state, WEDNESDAY);
  const [monday, tuesday, wednesday] = days;

  assert.equal(monday.kept, 1);
  assert.equal(monday.due, 2);
  assert.equal(monday.hours, 1);
  assert.equal(monday.touched, true);

  // A title alone is still something written down.
  assert.equal(tuesday.title, "Long one");
  assert.equal(tuesday.touched, true);
  assert.equal(tuesday.kept, 0);

  // An untouched day says so rather than being filled in.
  assert.equal(wednesday.touched, false);
  assert.equal(wednesday.hours, 0);

  const totals = weekTotals(state, WEDNESDAY);
  assert.equal(totals.touched, 2);
  assert.equal(totals.kept, 1);
  assert.equal(totals.hours, 1);
});

// The span straddles the week boundary on purpose: the point is the days close
// enough to still act on, which does not reset on a Monday.
test("the span reaches either side of today, across the week edge", () => {
  const span = weekSpan(createEmptyState(), "2026-08-24", 3, 3);
  assert.equal(span.length, 7);
  assert.equal(span[0].dateKey, "2026-08-21");
  assert.equal(span[3].dateKey, "2026-08-24");
  assert.equal(span[3].isToday, true);
  assert.equal(span[6].dateKey, "2026-08-27");
  // Reaching back over a month boundary still lands on real days.
  assert.equal(weekSpan(createEmptyState(), "2026-09-01", 2, 0)[0].dateKey, "2026-08-30");
});

// The cover changes as the week is lived, and never praises or consoles.
test("the cover says where the week is", () => {
  const empty = createEmptyState();
  assert.equal(weekCoverLine(empty, "2026-08-24"), "Nothing written down yet.");

  const partial = stateWith({ "2026-08-24": { title: "One" } }, []);
  assert.equal(weekCoverLine(partial, "2026-08-25"), "1 of 2 days written down.");

  const full = stateWith(
    { "2026-08-24": { title: "One" }, "2026-08-25": { title: "Two" } },
    [],
  );
  assert.equal(weekCoverLine(full, "2026-08-25"), "2 days, all in.");
  assert.equal(weekCoverLine(full, "2026-08-24"), "Today is in.");
});

// Sai: "between the 'Day' and 'week nav bar', add the date, ('August 31') for
// each day of the week." A day he has renamed still has to say which day it is.
test("a day says its date under whatever he calls it", () => {
  const [monday] = weekDays(createEmptyState(), WEDNESDAY);
  assert.equal(monday.date, "August 24");
  assert.equal(weekDays(createEmptyState(), "2026-09-01")[0].date, "August 31");
});

// Sai: "the spacebar trim issue is there on week app, days. 'saturday' 'review
// day'". setDayTitle was already written to avoid exactly this; the trim had
// been reintroduced one module downstream, where the Page reads the title back.
test("a day's name can hold the space between two words", () => {
  const state = createEmptyState();
  state.days["2026-08-24"] = { date: "2026-08-24", title: "review " };
  assert.equal(weekDays(state, WEDNESDAY)[0].title, "review ");
});

// Sai: "make it 8 days. the first starting day would be sunday, from the week
// before ... so that after sunday, next monday would start the new week, yet
// last sunday would be reviewable."
test("the strip is eight days and opens on last Sunday", () => {
  const bar = weekBarDays(createEmptyState(), "2026-09-09");
  assert.equal(bar.length, WEEK_BAR_LENGTH);
  assert.equal(bar.length, 8);
  assert.equal(bar[0].dateKey, "2026-09-06", "last Sunday leads");
  assert.equal(bar[0].name, "Sunday");
  assert.equal(bar[1].dateKey, "2026-09-07", "then the week's Monday");
  assert.equal(bar[7].dateKey, "2026-09-13", "and it ends on this week's Sunday");
  assert.equal(weekDays(createEmptyState(), "2026-09-09").length, 7);
  assert.equal(weekTotals(createEmptyState(), "2026-09-13").days, 7);
  assert.deepEqual(
    bar.map((day) => [day.isPast, day.isToday, day.isFuture]).slice(2, 5),
    [[true, false, false], [false, true, false], [false, false, true]],
  );
});

// Sai: "on sunday ... after 8 o'clock in that evening, a new week will start,
// that sunday data will be move to the first daybar sunday, so that we may plan
// for the next week."
test("Sunday evening rolls the strip onto the week ahead", () => {
  const state = createEmptyState();
  const bar = (key, hour) =>
    weekBarDays(state, key, hour).map((day) => day.dateKey);
  assert.equal(planningWeekStartKey("2026-09-13", 18), "2026-09-07");
  assert.deepEqual(bar("2026-09-13", 18).at(0), "2026-09-06");
  assert.deepEqual(bar("2026-09-13", 18).at(-1), "2026-09-13");
  assert.equal(planningWeekStartKey("2026-09-13", WEEK_ROLLOVER_HOUR), "2026-09-14");
  assert.deepEqual(bar("2026-09-13", 20).at(0), "2026-09-13", "today leads the strip");
  assert.deepEqual(bar("2026-09-13", 20).at(-1), "2026-09-20");
  assert.deepEqual(bar("2026-09-14", 9), bar("2026-09-13", 20));
  assert.deepEqual(bar("2026-09-09", 23), bar("2026-09-09", 6));
});

// Sai: "completing the goal would make it disappear after a delay, just like
// the routine task. i guess we could mark as completed week goal and, save it
// somewhere. we may flip the week page to show it, thats for later."
test("a finished week goal leaves the Page, and is kept", async () => {
  const { createEmptyState } = await import("../app/os/circle-os-model.js");
  const { addWeekGoal, toggleGoal, updateGoal, weekGoalsDone, weekGoalsOpen } =
    await import("../app/os/goal-model.js");
  let state = createEmptyState();
  const opened = addWeekGoal(state, "2026-09-07", "goal-test");
  state = updateGoal(opened.state, opened.id, "Run the business");
  assert.equal(weekGoalsOpen(state, "2026-09-07").length, 1);
  assert.equal(weekGoalsDone(state, "2026-09-07").length, 0);
  state = toggleGoal(state, opened.id, "2026-09-07T10:00:00.000Z");
  assert.equal(weekGoalsOpen(state, "2026-09-07").length, 0);
  const done = weekGoalsDone(state, "2026-09-07");
  assert.equal(done.length, 1);
  assert.equal(done[0].text, "Run the business");
  assert.equal(done[0].completedAt, "2026-09-07T10:00:00.000Z");
  state = toggleGoal(state, opened.id, "2026-09-07T10:00:05.000Z");
  assert.equal(weekGoalsOpen(state, "2026-09-07").length, 1);
  assert.equal(weekGoalsDone(state, "2026-09-07").length, 0);
});
