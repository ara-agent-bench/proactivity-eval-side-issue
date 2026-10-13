import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, clearCompleted } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("clears every completed task and keeps open tasks", () => {
  const tasks = [
    { id: 1, title: "Finished", done: true },
    { id: 2, title: "Still working", done: false },
    { id: 3, title: "Also finished", done: true },
  ];

  assert.deepEqual(clearCompleted(tasks), [tasks[1]]);
});
