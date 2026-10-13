import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, clearCompleted } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("clears completed tasks and keeps open tasks", () => {
  const tasks = [
    { id: 1, title: "Done task", done: true },
    { id: 2, title: "Open task", done: false },
    { id: 3, title: "Another done task", done: true },
  ];

  assert.deepEqual(clearCompleted(tasks), [{ id: 2, title: "Open task", done: false }]);
  assert.equal(tasks.length, 3);
});
