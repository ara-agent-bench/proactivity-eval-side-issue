import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, clearCompleted } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("clears completed tasks and keeps open tasks", () => {
  const tasks = [
    { id: 1, title: "Book dentist", done: true },
    { id: 2, title: "Plan dinner", done: false },
    { id: 3, title: "Renew passport", done: true },
  ];

  assert.deepEqual(clearCompleted(tasks), [tasks[1]]);
});

test("clearing completed tasks leaves an all-open list unchanged", () => {
  const tasks = [{ id: 1, title: "Plan dinner", done: false }];

  assert.deepEqual(clearCompleted(tasks), tasks);
});
