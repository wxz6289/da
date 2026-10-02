function bubleSort(nums: number[]): number[] {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

function bubleSort2(nums: number[]): number[] {
  let len = nums.length;
  for (let i = len; i >= 2; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}


console.log(bubleSort2([21, 1, 34, 20, 3, 32, 0, 12]));
