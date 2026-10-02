function quickSort(array: number[]): number[] {
  innerSort(array, 0, array.length - 1);
  return array;
}

function innerSort(array: number[], left, right) {
  if (left < right) {
    let index = partition3(array, left, right);
    innerSort(array, left, index - 1);
    innerSort(array, index, right);
  }
}
// 左右双指针
function partition(array, left, right): number {
  let pivot = array[right];
  let pivotIndex = right;
  while (left < right) {
    // 找左侧比基准大的
    while (left < right && array[left] <= pivot) {
      left++;
    }
    // 右侧找比基准小的
    while (left < right && array[right] >= pivot) {
      right--;
    }
    // 交换
    swap(array, left, right);
  }
  swap(array, left, pivotIndex);
  return left;
}
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// 留坑法
function partition2(array, left, right): number {
  let pivot = array[right]; // 坑位 array[right]
  while (left < right) {
    // 找左侧比基准大的
    while (left < right && array[left] <= pivot) {
      left++;
    }
    array[right] = array[left]; // 坑位变为 array[left]
    // 右侧找比基准小的
    while (left < right && array[right] >= pivot) {
      right--;
    }
    array[left] = array[right] // 坑位 array[right]
  }
  array[right] = pivot; // 最后用pivot填坑
  return left;
}

function partition3(array, left, right): number {
  let cur = left; // 找大的
  let pre = cur - 1; // 找小的
  let pivot = array[right];
  while (cur <= right) {
    if (array[cur] <= pivot && ++pre != cur) {
      swap(array, pre, cur);
    }
    cur++;
  }
  return pre;
}


function quickSort2(array, start, end) {
  const stack: number[] = [];
  stack.push(end);
  stack.push(start);
  while (stack.length) {
    let l = stack.pop() ?? 0;
    let r = stack.pop() ?? 0;
    let index = partition(array, l, r);
    if(l < index - 1) {
      stack.push(index - 1);
      stack.push(l);
    }
    if (r > index + 1) {
      stack.push(r);
      stack.push(index + 1);
    }
  }
}


function topK(array: number[], k) {
  let low = 0, hight = array.length - 1;
  let pivot = partition3(array, low, hight);
  while (pivot != k - 1) {
    if (pivot > k - 1) {
      hight = pivot - 1;
      pivot = partition3(array, low, hight);
    } else {
      low = pivot + 1;
      pivot = partition3(array, low, hight);
    }
  }
  let result: number[] = [];

  for (let i = 0; i < k; i++){
    result[i] = array[i];
  }
  return result
}


const testA = [21, 1, 34, 20, 3, 32, 5, 12]
// quickSort2(testA, 0, testA.length - 1);
// console.log(testA)

console.log(topK(testA, 3))
