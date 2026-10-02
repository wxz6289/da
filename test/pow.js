const pow = (m, n) => {
  let p = 1;
  for (let i = 1; i <= n; i++) {
    p *= m;
  }
  return p;
}

console.log(pow(5, 3))