class Node<T> {
  value: T;
  prev: Node<T> | null = null;
  next: Node<T> | null = null;
  constructor(element: T) {
    this.value = element;
  }
}

export default class DoublyLinkedList<T> {
  #size: number = 0;
  #head: Node<T> | null = null;
  #tail: Node<T> | null = null;

  append(element: T) {
    const node: Node<T> = new Node(element);
    if (this.tail) {
      node.prev = this.#tail!.prev;
      this.#tail!.prev!.next = node;
      this.#tail = node;
    } else {
      this.#tail = node;
      this.#head = node;
    }
    this.#size++;
  }

  insert(position: number, element: T): boolean {
    if (position >= 0 && position <= this.size) {
      const node: Node<T> = new Node(element);
      let current = this.head, previous: Node<T> | null = null, index = 0;
      if (position === 0) {
        if (!this.head) {
          this.#head = node;
          this.#tail = node;
        } else {
          node.next = current;
          current!.prev = node;
        }
      } else if (position === this.size) {
        current = this.tail;
        current!.next = node;
        node.prev = current;
        this.#tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current!.next;
        }
        node.next = current;
        previous!.next = node;
        node.prev = previous;
        current!.prev = node;
      }
      this.#size++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(position: number): T | undefined {
    if (position >= 0 && position < this.size) {
      let current = this.head, previous: Node<T> | null = null, index = 0;
      if (position === 0) {
        this.#head = current!.next;
        if (this.size === 1) {
          this.#tail = null;
        } else {
          this.#head!.prev = null;
        }
      } else if (position == this.size - 1) {
        current = this.tail;
        this.#tail = current!.prev;
        this.#tail!.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current!.next;
        }
        previous!.next = current!.next;
        current!.next!.prev = previous;
      }
      this.#size--;
      return current!.value;
    } else {
      return;
    }
  }

  get size(): number {
    return this.#size;
  }

  get head(): Node<T> | null {
    return this.#head;
  }

  get tail(): Node<T> | null {
    return this.#tail;
  }
}

// 循环链表
export class CircularLinkedList {
}
