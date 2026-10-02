class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(element: T, next: Node<T> | null = null) {
    this.value = element;
    this.next = next;
  }
}

export default class LinkedList<T> {
  #head: Node<T> | null;
  #size: number;
  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  append(element: T) {
    let node = new Node(element);
    if (this.head === null) {
      this.#head = node;
    } else {
      let current = this.head;
      while (current.next) { // 找到最后一个节点 最后一个节点的next为null
        current = current.next;
      }
      current.next = node;
    }
    this.#size++;
  }

  insert(position: number, element: T) {
    if (position < 0 || position > this.size) {
      throw new Error("not support out of linked list range ");
    }
    let current = this.head;
    let previous: Node<T> | null = null;
    let node = new Node(element);
    let index = 0;
    if (position === 0) {
      this.#head = node;
      node.next = current;
    } else {
      while (index++ < position && current?.next) {
        previous = current;
        current = current.next;
      }
      previous!.next = node;
      node.next = current;
    }
    this.#size++;
  }

  removeAt(position: number) {
    if (position < 0 || position > this.size) {
      throw new Error("not support out of linked list range ");
    }
    let current = this.head;
    let previous: Node<T> | null = null;
    let index = 0;
    if (position == 0) {
      this.#head = current?.next ?? null;
    } else {
      while (index++ < position) {
        previous = current as Node<T>;
        current = current?.next as Node<T>;
      }
      previous!.next = current?.next as Node<T>;
    }
    this.#size--;
    return current?.value;
  }

  remove(element: T) {
    let index = 0;
    let current = this.head;
    let previous: Node<T> | null = null;
    let isReomoved = false;
    while (current) {
      if (current.value === element) {
        if (index == 0) {
          this.#head = current.next;
          isReomoved = true;
          break;
        } else {
          previous!.next = current.next;
          isReomoved = true;
          break;
        }
      }
      previous = current;
      current = current?.next;
      index++;
    }
    if (isReomoved) this.#size--;
    return isReomoved;
  }

  indexOf(element: T) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value === element) return index;
      current = current?.next;
      index++;
    }
    return -1;
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  toString(seperate = ",") {
    let str = "";
    let current = this.head;
    while (current) {
      str += str == ""
        ? String(current.value)
        : seperate + String(current.value);
      current = current.next;
    }
    return str;
  }
}
