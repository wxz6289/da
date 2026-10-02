export class List<T> {
  #size = 0;
  #store: T[] = [];
  get size() {
    return this.#size
  }

  append(item: T) {
    this.#store.push(item);
    this.#size++;
  }

  find(item: T) {
    return this.#store.indexOf(item);
  }

  remove(item: T) {
    const index = this.find(item);
    if (index > -1) {
      this.#store.splice(index, 1);
      this.#size--;
      return true;
    }
    return false;
  }

  toString() {
    return this.#store.toString();
  }
}
