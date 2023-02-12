let arr = [];

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return Merge(mergeSort(left), mergeSort(right));
  }
};

const Merge = (leftArr, rightArr) => {
  let result = [];
  while (leftArr.length > 0 && 0 < rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr[0]);
      leftArr.splice(0, 1);
    } else {
      result.push(rightArr[0]);
      rightArr.splice(0, 1);
    }
  }
  if (leftArr.length > 0) {
    leftArr.forEach((arr) => {
      result.push(arr);
    });
  }
  if (rightArr.length > 0) {
    rightArr.forEach((arr) => {
      result.push(arr);
    });
  }
  return result;
};

console.log(
  mergeSort([
    5, 2, 1, 3, 6, 4, 43, 42, 13, 64, 875, 1351, 5552, 265, 2564, 4552, 32,
    2342, 56, 23, 434, 56, 66, 54, 45, 434, 43, 454, 2424, 2,
  ])
);
