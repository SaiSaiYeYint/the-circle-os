import { getDateKey } from "./circle-os-model.js";
import { weekStartKey } from "./week-app-model.js";

function validWeek(key) {
  if (typeof key !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(key)) return false;
  const date = new Date(`${key}T12:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === key && date.getUTCDay() === 1;
}

export function weekActivityHistory(state) {
  const goals = Object.values(state.goals?.items || {});
  const rows = goals.filter(goal => goal.scope === "week" && goal.status === "done" && goal.text?.trim()).map(goal => ({
    id: `goal-${goal.id}`, text: goal.text, at: goal.removedAt || goal.completedAt || goal.updatedAt || "", kind: "goal", goalId: goal.id, goalText: goal.text,
  }));
  for (const step of Object.values(state.goals?.steps || {})) {
    const task = state.tasks?.items?.[step.taskId];
    const parent = state.goals?.items?.[step.goalId];
    if (!task || (!['completed', 'archived'].includes(task.status) && parent?.status !== 'done') || !task.text?.trim()) continue;
    rows.push({ id: `task-${task.id}`, text: task.text, at: task.completedAt || (task.status === 'archived' ? task.updatedAt : parent?.removedAt || parent?.completedAt || parent?.updatedAt) || "", kind: "task", goalId: step.goalId, goalText: parent?.text || "" });
  }
  return [...new Map(rows.map(row => [row.id, row])).values()].sort((a, b) => b.at.localeCompare(a.at));
}

/** Group event days, keeping each task under its own goal without copying state.
 * @param {Array<{id:string,text:string,at:string,kind:string,goalId?:string,goalText?:string}>} activity
 * @returns {Array<{dateKey:string,goals:Array<{id:string,text:string,tasks:Array<{id:string,text:string}>}>}>}
 */
export function groupWeekActivity(activity) {
  const days = new Map();
  for (const row of activity) {
    const dateKey = Number.isFinite(Date.parse(row.at)) ? getDateKey(new Date(row.at)) : "";
    if (!days.has(dateKey)) days.set(dateKey, { dateKey, goals: new Map() });
    const day = days.get(dateKey);
    const id = row.goalId || row.id;
    if (!day.goals.has(id)) day.goals.set(id, { id, text: row.goalText || (row.kind === 'goal' ? row.text : ''), tasks: [] });
    if (row.kind === 'task') day.goals.get(id).tasks.push({ id: row.id, text: row.text });
  }
  return [...days.values()].sort((a, b) => b.dateKey.localeCompare(a.dateKey)).map(day => ({ ...day, goals: [...day.goals.values()] }));
}

/** Read saved weeks without normalizing, writing or replaying chapter outcomes.
 * Goal/task words are the saved records, not reconstructed historical versions.
 * @param {import("./circle-os-shell").CircleState} state
 * @param {string} todayKey
 */
export function weekHistory(state, todayKey = getDateKey()) {
  const currentWeek = weekStartKey(todayKey);
  const items = Object.values(state.goals?.items || {});
  const keys = new Set([
    ...Object.keys(state.weeks || {}),
    ...items.filter(goal => goal.scope === "week").map(goal => goal.dateKey),
  ]);
  return [...keys].filter(key => validWeek(key) && key < currentWeek).sort().reverse().flatMap(weekKey => {
    const goals = items.filter(goal => goal.scope === "week" && goal.dateKey === weekKey)
      .sort((a, b) => String(a.createdAt || "").localeCompare(String(b.createdAt || ""))).map(goal => ({
        id: goal.id, text: goal.text, done: goal.status === "done" && !goal.removedAt, removed: Boolean(goal.removedAt),
        steps: Object.values(state.goals?.steps || {}).filter(step => step.goalId === goal.id)
          .sort((a, b) => String(a.createdAt || "").localeCompare(String(b.createdAt || ""))).map(step => {
            const task = state.tasks?.items?.[step.taskId];
            return { id: step.id, dateKey: step.dateKey, text: task?.text || "", status: task ? task.status : "missing" };
          }),
      })).filter(goal => goal.text.trim() || goal.steps.length);
    const saved = state.weeks?.[weekKey];
    const review = saved ? { kept: saved.kept, fed: saved.fed, moved: saved.moved, blocked: saved.blocked, keep: saved.keep, reviewedAt: saved.reviewedAt } : null;
    return goals.length || review ? [{ weekKey, goals, review }] : [];
  });
}
