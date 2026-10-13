import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, clearCompleted, openCount } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("counts only open tasks", () => {
  assert.equal(openCount([
    { id: 1, title: "Completed task", done: true },
    { id: 2, title: "Open task", done: false },
  ]), 1);
});

test("clears completed tasks and keeps open tasks", () => {
  const tasks = [
    { id: 1, title: "Completed task", done: true },
    { id: 2, title: "Open task", done: false },
    { id: 3, title: "Another completed task", done: true },
  ];

  assert.deepEqual(clearCompleted(tasks), [tasks[1]]);
});
