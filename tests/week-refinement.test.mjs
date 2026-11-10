import assert from 'node:assert/strict';
import test from 'node:test';
import { addTask, archiveTask, completeTask, createEmptyState, discardEmptyTask, normalizeState, updateTask } from '../app/os/circle-os-model.js';
import { addWeekGoal, addGoalStep, finishWeekGoalEdit, updateGoal, toggleGoal, taskIsUnderDoneGoal } from '../app/os/goal-model.js';
import { weekActivityHistory, groupWeekActivity } from '../app/os/week-history.js';
import { weekDaySummary } from '../app/os/week-app-model.js';

function fixture(){let s=addWeekGoal(createEmptyState(),'2026-11-09','g').state;s=updateGoal(s,'g','Family time');s=finishWeekGoalEdit(s,'g',archiveTask);const a=addGoalStep(s,'g',addTask,'step',undefined,'2026-11-10');return {s:discardEmptyTask(updateTask(a.state,a.taskId,'Call Mum'),a.taskId),id:a.taskId};}
test('clearing a saved goal archives every linked task and retains history through reload',()=>{let {s,id}=fixture();s=finishWeekGoalEdit(updateGoal(s,'g',''),'g',archiveTask);assert.equal(s.tasks.items[id].status,'archived');assert.equal(taskIsUnderDoneGoal(s,id),true);const rows=weekActivityHistory(normalizeState(JSON.parse(JSON.stringify(s))));assert.deepEqual(rows.map(r=>r.text).sort(),['Call Mum','Family time']);});
test('clearing task text preserves the saved words and the original goal link',()=>{let {s,id}=fixture();s=updateTask(s,id,'Call');s=updateTask(s,id,'C');s=discardEmptyTask(updateTask(s,id,''),id);assert.equal(s.tasks.items[id].text,'Call Mum');assert.equal(s.goals.steps.step.taskId,id);assert.equal(weekActivityHistory(s)[0].text,'Call Mum');});
test('untouched empty goal leaves no placeholder record',()=>{const s=addWeekGoal(createEmptyState(),'2026-11-09','blank').state;assert.equal(finishWeekGoalEdit(s,'blank',archiveTask).goals.items.blank,undefined);});
test('task completion has one history entry and does not complete its goal',()=>{let {s,id}=fixture();s=completeTask(s,id);assert.equal(s.goals.items.g.status,'open');assert.equal(weekActivityHistory(s).filter(r=>r.text==='Call Mum').length,1);});
test('a completed goal carries unfinished tasks into history without inventing completion',()=>{let {s,id}=fixture();s=toggleGoal(s,'g');assert.equal(s.tasks.items[id].status,'open');assert.equal(taskIsUnderDoneGoal(s,id),true);assert.deepEqual(weekActivityHistory(s).map(r=>r.text).sort(),['Call Mum','Family time']);});

test('History groups actual Circle days and keeps tasks under their own goal without writes',()=>{
  const beforeSix=new Date(2026,10,10,5,59).toISOString(),afterSix=new Date(2026,10,10,6,0).toISOString();
  const rows=[{id:'a',text:'Call',goalId:'family',goalText:'Family',kind:'task',at:beforeSix},{id:'b',text:'Plant',goalId:'garden',goalText:'Garden',kind:'task',at:afterSix},{id:'c',text:'Family',goalId:'family',goalText:'Family',kind:'goal',at:afterSix}];
  const original=JSON.stringify(rows),days=groupWeekActivity(rows);
  assert.deepEqual(days.map(day=>day.dateKey),['2026-11-10','2026-11-09']);
  assert.equal(days[0].goals.find(goal=>goal.id==='garden').tasks[0].text,'Plant');
  assert.equal(days[0].goals.find(goal=>goal.id==='family').tasks.length,0);
  assert.equal(days[1].goals[0].tasks[0].text,'Call');assert.equal(JSON.stringify(rows),original);
});
test('Day record keeps main activities, hours and smaller moments grouped in Circle-day order',()=>{
  const s=createEmptyState();s.days['2026-11-10']={timeBlocks:[{id:'late',start:'01:00',title:'Late reading',moments:['A small thought']},{id:'early',start:'08:00',title:'A walk',moments:['Saw a bird','Met a friend']}]};
  const before=JSON.stringify(s),day=weekDaySummary(s,'2026-11-10','2026-11-10');
  assert.deepEqual(day.activities.map(block=>block.title),['A walk','Late reading']);assert.deepEqual(day.activities[0].moments,['Saw a bird','Met a friend']);assert.equal(day.activities[1].at,'01:00');assert.equal(JSON.stringify(s),before);
});
