function selectSort(nums: number[]): number[] {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[i]) { // nums[i] 维护着第i+1小的值
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

function ss(array: number[]) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (i != min) {
      [array[i], array[min]] = [array[min], array[i]]
    }
  }
  return array
}

console.log(ss([21, 1, 34, 20, 3, 32, 0, 12]));
