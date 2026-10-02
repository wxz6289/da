function shellSort(array: number[]): number[] {
  const len = array.length;
  let gap: number | undefined = 1;
  const gaps = genSedgewickSeq(len); //genShellGapSeq(len);

  while (gap = gaps.pop()) {
    // 插入排序
    for (let g = 0; g < gap; g++) {
      for (let i = g + gap; i < len; i += gap) {
        let target = array[i];
        if (target < array[i - gap]) {
          let j = i;
          while (j > 0 && array[j - gap] > target) {
            array[j] = array[j - gap];
            j -= gap;
          }
          array[j] = target
        }
      }
    }
  }
  return array;
}

function genShellGapSeq(n: number): number[] {
  // n/2, n/4, ..., 1
  // g = g / 2
  const gaps: number[] = [];
  let gap = n;
  while (gap != 1) {
    gap = gap >> 1;
    gaps.unshift(gap);
  }
  return gaps;
}

function gentKnuthGapSeq(n: number): number[] {
  // 1, 4, 13, ...
  // Knuth g = 3 * g + 1
  const gaps = [1];
  let gap = 1;
  while (true) {
    gap = gap * 3 + 1;
    if (gap >= n) { // 增量不能大于数组长度
      break;
    }
    gaps.push(gap);
  }
  return gaps;
}

function genHibbardGapSeq(n: number): number[] {
  const gaps = [1];
  let gap = 1;
  let k = 1;
  while (true) {
    gap = 2 ** k - 1;
    if (gap >= n) { // 增量不能大于数组长度
      break;
    }
    gaps.push(gap);
    k++;
  }
  return gaps;
}

function genSedgewickSeq(n: number): number[] {
  const gaps: number[] = [];
  let start1 = 0, start2 = 2;
  for (let i = 0; i < n; i++){
    if (i % 2) {
      gaps[i] = 9 * Math.pow(4, start1) - 9 * Math.pow(2, start1) + 1;
      start1++;
    } else {
      gaps[i] = Math.pow(4, start2) - 3 * Math.pow(2, start2) + 1;
      start2++;
    }

    if (gaps[i] >= n) {
      break;
    }
  }
  return gaps;
}

console.log(shellSort([21, 1, 34, 20, 3, 32, 0, 12]))