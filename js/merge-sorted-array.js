function mergeSortedArray(src, dest) {
  let m = src.length - 1;
  let n = dest.length - 1;
  let newIndex = m + n + 1;
  console.log(m, n, newIndex)
  while (newIndex >= 0) {
    if (m >= 0) {
      if (src[m] >= dest[n]) {
        dest[newIndex--] = src[m--];
      } else {
        dest[newIndex--] = dest[n--];
      }
    } else {
      dest[newIndex--] = dest[n--];
    }
  }
  return dest
}

console.log(mergeSortedArray([2, 4, 6, 7, 11, 23, 45, 67], [3, 8, 12, 19, 25, 36, 55, 60, 72, 81, 99]));