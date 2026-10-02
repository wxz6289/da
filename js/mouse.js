/*
走迷宫
1 表示不可通过
0 表示可通过
x 竖轴
y 横轴
*/
class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.next = null;
  }
}

class TraceRecord {
  constructor() {
    this.first = null;
    this.last = null;
  }
  isEmpty() {
    return this.first == null
  }
  insert(x, y) {
    let newNode = new Node(x, y);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }
  delete() {
    if (!this.first) {
      console.log('队列已空\n');
      return;
    } else {
      let newNode = this.first;
      while (newNode.next != this.last) {
        newNode = newNode.next;
      }
      newNode.next = this.last.next;
      this.last = newNode;
    }
  }
}

const exitX = 8, exitY = 10;

const MAZE = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const checkExit = (x, y, ex, ey) => {
  if (x == ex && y == ey) {
    if (MAZE[x - 1][y] == 1 || MAZE[x + 1][y] == 1 || MAZE[x][y - 1] == 1 || MAZE[x][y + 1] == 2) {
      return 1;
    }
    if (MAZE[x - 1][y] == 1 || MAZE[x + 1][y] == 1 || MAZE[x][y - 1] == 2 || MAZE[x][y + 1] == 1) {
      return 1;
    }
    if (MAZE[x - 1][y] == 1 || MAZE[x + 1][y] == 2 || MAZE[x][y - 1] == 1 || MAZE[x][y + 1] == 1) {
      return 1;
    }
    if (MAZE[x - 1][y] == 2 || MAZE[x + 1][y] == 2 || MAZE[x][y - 1] == 1 || MAZE[x][y + 1] == 1) {
      return 1;
    }
  } else {
    return 0;
  }
}

let x = 1, y = 1, path = new TraceRecord();

console.log('迷宫的路径0标记');
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 12; j++) {
    process.stdout.write(MAZE[i][j].toString());
  }
  console.log();
}

while (x <= exitX && y <= exitY) {
  MAZE[x][y] = 2;
  if (MAZE[x - 1][y] == 0) {
    x -= 1;
    path.insert(x, y);
  } else if (MAZE[x + 1][y] == 0) {
    x += 1;
    path.insert(x, y);
  } else if (MAZE[x][y - 1] == 0) {
    y -= 1;
    path.insert(x, y);
  } else if (MAZE[x][y + 1] == 0) {
    y += 1;
    path.insert(x, y);
  } else if (checkExit(x, y, exitX, exitY) == 1) {
    break;
  } else {
    MAZE[x][y] = 2;
    path.delete();
    x = path.last.x;
    y = path.last.y;
  }
}

console.log('走过的路径(2标记)');
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 12; j++) {
    process.stdout.write(MAZE[i][j].toString());
  }
  console.log()
}