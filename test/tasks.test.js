import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, clearCompleted, openCount } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("clears completed tasks while preserving open tasks", () => {
  const tasks = [
    { id: 1, title: "Book dentist", done: true },
    { id: 2, title: "Plan dinner", done: false },
    { id: 3, title: "Renew passport", done: true },
  ];

  assert.deepEqual(clearCompleted(tasks), [tasks[1]]);
  assert.deepEqual(tasks.map(task => task.id), [1, 2, 3]);
});

test("counts only open tasks", () => {
  assert.equal(openCount([
    { id: 1, title: "Book dentist", done: true },
    { id: 2, title: "Plan dinner", done: false },
  ]), 1);
});
