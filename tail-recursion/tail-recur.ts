function tailRecursion(n: number, acc: number = 0): number {
  if (n === 0) return acc;
  return tailRecursion(n - 1, acc + n);
}

console.log(tailRecursion(10));
