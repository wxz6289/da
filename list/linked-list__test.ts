import LinkedList from "./linked-list.ts";
import { assertEquals } from "std/assert/mod.ts";

Deno.test("LinkedList append()", () => {
  let ll = new LinkedList();
  assertEquals(ll.size, 0);
  assertEquals(ll.head, null);
  ll.append(15);
  assertEquals(ll.size, 1);
  assertEquals(ll.head?.value, 15);
  ll.append(10);
  assertEquals(ll.size, 2);
  assertEquals(ll.toString(), "15,10");
});

Deno.test("LinkedList insert()", () => {
  let ll = new LinkedList();
  assertEquals(ll.size, 0);
  assertEquals(ll.head, null);
  ll.append(15);
  assertEquals(ll.size, 1);
  assertEquals(ll.head?.value, 15);
  ll.insert(0, 10);
  ll.insert(1, 2);
  assertEquals(ll.size, 3);
  assertEquals(ll.toString(), "10,2,15");
});

Deno.test("LinkedList removeAt()", () => {
  let ll = new LinkedList();
  ll.append(12);
  ll.append(23);
  ll.append(20);
  assertEquals(ll.size, 3);
  ll.append(15);
  assertEquals(ll.size, 4);
  ll.removeAt(0);
  assertEquals(ll.size, 3);
  assertEquals(ll.toString(), "23,20,15");
  ll.removeAt(1);
  assertEquals(ll.size, 2);
  assertEquals(ll.toString(), "23,15");
});
