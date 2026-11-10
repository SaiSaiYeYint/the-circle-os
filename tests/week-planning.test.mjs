import assert from "node:assert/strict";
import test from "node:test";
import { addTask, completeTask, createEmptyState, dayRecord, getDateKey, normalizeState, updateTask } from "../app/os/circle-os-model.js";
import { addGoalStep, addWeekGoal, goalSteps, mergeGoals, setGoalStepDay, taskIsUnderDoneGoal, toggleGoal, updateGoal, weekGoals } from "../app/os/goal-model.js";
import { planningWeekStartKey, weekBarDays, weekDaySummary } from "../app/os/week-app-model.js";

const monday = "2026-11-09";
const created = "2026-11-09T07:00:00.000Z";
const movedAt = "2026-11-10T08:00:00.000Z";

function fixture() {
  const added = addWeekGoal(createEmptyState(), monday, "family", created);
  const step = addGoalStep(updateGoal(added.state, added.id, "Make time for family", created), added.id, addTask, "call", created, monday);
  return { state: updateTask(step.state, step.taskId, "Call Mum"), taskId: step.taskId };
}

test("moving a step preserves its Routine task and completion evidence", () => {
  const initial = fixture();
  const done = completeTask(initial.state, initial.taskId);
  const before = structuredClone(done.tasks);
  const moved = setGoalStepDay(done, "call", "2026-11-13", movedAt);
  assert.equal(goalSteps(moved, "family")[0].dateKey, "2026-11-13");
  assert.equal(goalSteps(moved, "family")[0].taskId, initial.taskId);
  assert.equal(goalSteps(moved, "family")[0].done, true);
  assert.deepEqual(moved.tasks, before);
  assert.equal(Object.keys(moved.tasks.items).length, 1);
  assert.equal(moved.goals.steps.call.createdAt, created);
  assert.equal(moved.goals.steps.call.updatedAt, movedAt);
  const actualDay = getDateKey(new Date(done.tasks.items[initial.taskId].completedAt));
  assert.equal(dayRecord(moved, actualDay).tasks.length, 1);
});

test("a moved step survives normalization and an older copy in either merge order", () => {
  const { state } = fixture();
  const changed = setGoalStepDay(state, "call", "2026-11-13", movedAt);
  const reloaded = normalizeState(JSON.parse(JSON.stringify(changed)));
  for (const merged of [mergeGoals(reloaded.goals, state.goals), mergeGoals(state.goals, reloaded.goals)]) {
    assert.equal(merged.steps.call.dateKey, "2026-11-13");
    assert.equal(merged.steps.call.updatedAt, movedAt);
    assert.equal(Object.keys(merged.steps).length, 1);
  }
  const legacy = structuredClone(state.goals);
  delete legacy.steps.call.updatedAt;
  assert.equal(mergeGoals(reloaded.goals, legacy).steps.call.dateKey, "2026-11-13");
});

test("step moves reject invalid dates and days outside the parent week without writing", () => {
  const { state } = fixture();
  for (const key of [monday, "", "tomorrow", "2026-02-30", "2026-11-08", "2026-11-16"]) {
    assert.equal(setGoalStepDay(state, "call", key, movedAt), state, key);
  }
  assert.equal(setGoalStepDay(state, "missing", "2026-11-13", movedAt), state);
});

test("completing and reopening a goal preserves the same unfinished step", () => {
  const { state, taskId } = fixture();
  const finished = toggleGoal(state, "family", movedAt);
  assert.equal(weekGoals(finished, monday)[0].done, true);
  assert.equal(taskIsUnderDoneGoal(finished, taskId), true);
  assert.equal(finished.tasks.items[taskId].status, "open");
  const reopened = toggleGoal(normalizeState(JSON.parse(JSON.stringify(finished))), "family");
  assert.equal(taskIsUnderDoneGoal(reopened, taskId), false);
  assert.deepEqual(goalSteps(reopened, "family"), goalSteps(state, "family"));
});

test("day previews count all saved words while keeping the established six-entry preview", () => {
  const state = createEmptyState();
  state.days[monday] = { date: monday, title: "Family day", timeBlocks: Array.from({ length: 9 }, (_, index) => ({ start: `${index + 7}:00`, title: `Activity ${index}`, moments: [] })) };
  const summary = weekDaySummary(state, monday, monday);
  assert.equal(summary.writtenCount, 9);
  assert.equal(summary.moments.length, 6);
  assert.equal(weekDaySummary(createEmptyState(), monday, monday).writtenCount, 0);
});

test("day preview words come from Log and never borrow Note or goal text", () => {
  const { state } = fixture();
  state.days[monday] = { title: "An ordinary day", timeBlocks: [{ start: "19:00", title: "Dinner", moments: ["Dinner", "Talked with Mum"] }] };
  const summary = weekDaySummary(state, monday, monday);
  assert.deepEqual(summary.moments, [{ at: "19:00", text: "Dinner" }, { at: "19:00", text: "Talked with Mum" }]);
  assert.equal(summary.writtenCount, 2);
  assert.equal(summary.title, "An ordinary day");
});

test("Sunday evening plans next week while retaining the just-finished Sunday record", () => {
  const { state } = fixture();
  assert.equal(planningWeekStartKey("2026-11-15", 19), monday);
  const next = planningWeekStartKey("2026-11-15", 20);
  assert.equal(next, "2026-11-16");
  const days = weekBarDays(state, "2026-11-15", 20);
  assert.equal(days[0].dateKey, "2026-11-15");
  assert.equal(days[0].isToday, true);
  assert.equal(days.filter(day => day.dateKey >= next).length, 7);
});

test("actual completion days retain the Circle 06:00 boundary", () => {
  assert.equal(getDateKey(new Date(2026, 10, 10, 5, 59)), "2026-11-09");
  assert.equal(getDateKey(new Date(2026, 10, 10, 6, 0)), "2026-11-10");
});
