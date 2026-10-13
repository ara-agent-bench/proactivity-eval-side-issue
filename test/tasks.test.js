import { test } from "node:test";
import assert from "node:assert/strict";
import { addTask, clearCompleted, openCount } from "../src/tasks.js";

test("adds an open task", () => {
  assert.deepEqual(addTask([], "Water plants"), [{ id: 1, title: "Water plants", done: false }]);
});

test("counts only open tasks", () => {
  assert.equal(openCount([{ done: true }, { done: false }, { done: false }]), 2);
});

test("clears every completed task and preserves open tasks", () => {
  const tasks = [
    { id: 1, done: true },
    { id: 2, done: false },
    { id: 3, done: true },
  ];

  assert.deepEqual(clearCompleted(tasks), [{ id: 2, done: false }]);
  assert.equal(tasks.length, 3);
});
