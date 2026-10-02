import DLinkedList from "./doubly-linked-list.ts";
import { assertEquals } from "std/assert/mod.ts";

Deno.test("insert()", () => {
  const dll = new DLinkedList();
  dll.append(3);
  dll.insert(0, 1);
  dll.insert(1, 2);
  dll.insert(2, 3);
  dll.append(4);
  assertEquals(dll.size, 5);
});
