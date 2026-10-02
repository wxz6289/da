function swap1({ x, y }) {
  x = x + y;
  y = x - y;
  x = x - y;
  return { x, y }
}

console.log(swap1({ x: 2, y: 3 }));

function swap2({ x, y }) {
  x = x ^ y;
  y = x ^ y;
  x = x ^ y;
  return { x, y }
}

console.log(swap2({ x: 2, y: 3 }));