function mergeSort(nums: number[]): number[] {
  const len = nums.length;
  if (len <= 1) return nums;
  const mid = Math.floor(len / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const l = left.length, r = right.length;
  let i = 0, j = 0;
  const result: number[] = [];
  while (i < l && j < r) {
    left[i] < right[j] ? result.push(left[i++]) : result.push(right[j++]);
  }

  if (i < l) {
    result.push(...left.slice(i));
    i = l;
  }

  if (j < r) {
    result.push(...right.slice(j));
    j = r;
  }
  return result;
}

console.log(mergeSort([21, 1, 34, 20, 3, 32, 0, 12]));
