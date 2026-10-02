function insertSort(nums: number[]): number[] {
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      let temp = nums[i];
      if (temp < nums[j]) {
        let k = i;
        while (k >= j) {
          // nums[k] = nums[--k]
          nums[k] = nums[k - 1];
          k--;
        }
        nums[j] = temp;
      }
    }
  }
  return nums;
}

function insertSort2(array: number[]): number[] {
  const len = array.length;
  if (len <= 1) return array;
  for (let i = 1; i < len; i++){
    let target = array[i];
    let j = i - 1;
    while (j > 0 && array[j - 1] > target) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = target;
  }
  return array;
}

function insertSort3(array: number[]): number[] {
  const len = array.length;
  if (len <= 1) return array;
  for (let i = 1; i < len; i++){
    let target = array[i];
    let j = i - 1;
    for (; j >= 0 && array[j] > target; j--) {
      array[j + 1] = array[j]
    }
    array[j+1] = target;
  }
  return array;
}

function insertSort4(array: number[]): number[] {
  const len = array.length;
  if (len <= 1) return array;
  for (let i = 1; i < len; i++){
    let temp = array[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (temp >= array[j]) {
        break;
      }
    }
    if (j != i - 1) {
      for (let k = i - 1; k > j; k--){
        array[k + 1] = array[k];
      }
      array[j+1] = temp;
    }
  }
  return array;
}


const test = [21, 1, 34, 20, 3, 32, 0, 12]
// console.log(insertSort(test));
console.log(insertSort2(test))

