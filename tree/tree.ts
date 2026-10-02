class TreeNode {
  parent: TreeNode | null = null;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  data;
  constructor(data) {
    this.data = data;
  }
}

function insertIt(node, data, dir) {
  if (node.data == data) {
    return false;
  } else if (!node.left) {
    node.left = new TreeNode(data);
    node.left.parent = node;
    return true;
  } else if (!node.right) {
    node.right = new TreeNode(data);
    node.right.parent = node;
    return true;
  } else {
    if (dir) {
      return insertIt(node.left, data, dir);
    } else {
      return insertIt(node.right, data, dir);
    }
  }
}

/* function findIt(node, data) {
  while (node) {
    if (node.data == data) {
      return node;
    }
    if (node.left) {
      node = node.left;
    }

    if (node.right) {
      node = node.right;
    }
  }
} */

function transplant(node, child, tree) {
  if (!node.parent) {
    tree.root = child;
  } else if (node == node.parent.left) {
    node.parent.left = child;
  } else {
    node.parent.right = child;
  }
  if (child) {
    child.parent = node.parent;
  }
}

class Tree {
  root: TreeNode | null = null;
  #size = 0;
  #dir = false; // 左为true 记录上次插入的方向
  insert(data) {
    let result = false;
    if (!this.root) {
      this.root = new TreeNode(data);
      result = true;
    } else {
      this.#dir = !this.#dir;
      result = insertIt(this.root, data, this.#dir);
    }
    if (result) {
      this.#size++;
    }
    return result;
  }

  find(data): TreeNode | null {
    let ret = null;
    function findIt(node, data) {
      if (node) {
        if (node.data == data) {
          ret = node;
        } else {
          findIt(node.left, data);
          findIt(node.right, data);
        }
      }
    }
    findIt(this.root, data);
    return ret;
  }
  remove(data) {
    let node = this.find(data);
    if (node) {
      this.removeNode(p);
      this.#size--;
    }
    /*  if (node) {
      this.#size--;
      if (node == this.root) {
        this.root = null;
        return true;
      }
      let { left, right, parent } = node;
      let isLeft = parent && parent.left == node;
      if (!left && !right) {
        if (isLeft) {
          parent!.left = null;
        } else {
          parent!.right = null;
        }
      } else if (left && !right) {
        if (isLeft) {
          parent!.left = left;
        } else {
          parent!.right = left;
        }
        left.parent = parent;
      } else if (!left && right) {
        if (isLeft) {
          parent!.left = right;
        } else {
          parent!.right = right;
        }
        right.parent = parent;
      } else if (left && right) {
        let child = right;
        while (child.left) {
          child = child.left;
        }
        node.data = child.data;
        this.remove(node.data);
      }
    } */
  }
  removeNode(node) {
    if (node.left && node.right) {
      let current: TreeNode | null | undefined = null;
      for (
        current = node.right;
        current!.left != null;
        current = current?.left
      ); // 空循环
      node.data = current!.data;
      this.removeNode(current);
    } else {
      let child = node.left || node.right || null;
      transplant(node, child, this);
    }
  }
  min() {
    let node = this.maxNode();
    return node?.data ?? null;
  }
  max() {
    let node = this.minNode();
    return node?.data ?? null;
  }
  maxNode(node?) {
    let cur = node ?? this.root;
    while (cur.right) {
      cur = cur.right;
    }
    return cur;
  }
  minNode(node?) {
    let cur = node ?? this.root;
    while (cur.left) {
      cur = cur.left;
    }
    return cur;
  }
  getNodeSize(node?) {
    if (!node) return 0;
    let leftChildSize = this.getNodeSize(node.left);
    let rightChildSize = this.getNodeSize(node.size);
    return leftChildSize + rightChildSize + 1;
  }
  getNodeHeight(node?) {
    if (!node) return 0;
    let leftChildHeight = this.getNodeHeight(node.left);
    let rightChildHeight = this.getNodeHeight(node.right);
    let max = Math.max(leftChildHeight, rightChildHeight);
    return max + 1;
  }
  get size() {
    return this.#size;
  }

  inOrder(callback) {
    this.forEach(this.root, callback, "middle");
  }
  preOrder(callback) {
    this.forEach(this.root, callback, "pre");
  }
  postOrder(callback) {
    this.forEach(this.root, callback, "post");
  }
  private forEach(node, callback, type: "pre" | "post" | "middle") {
    if (!node) return;
    if (type == "pre") {
      callback(node);
      this.forEach(node.left, callback, type);
      this.forEach(node.right, callback, type);
    } else if (type == "middle") {
      this.forEach(node.left, callback, type);
      callback(node);
      this.forEach(node.right, callback, type);
    } else if (type == "post") {
      this.forEach(node.left, callback, type);
      this.forEach(node.right, callback, type);
      callback(node);
    }
  }
}

const t = new Tree();
t.insert(23);
t.insert(5);
t.insert(12);
t.insert(10);
t.insert(10);
t.insert(6);

t.preOrder(({ data }) => {
  console.log(data);
});
// console.dir(t, { deep: Infinity });

// const n12 = t.find(10);
// console.dir(n12);
