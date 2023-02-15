/*
1. Create a function that checks if an array is sorted -Check

When an  sorted array is given it creates a binary tree

*/
let arr = [];

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

class Bst {
  checkArr(arr) {
    let isSorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        isSorted = false;
      }
    }
    return isSorted;
  }

  createTree(arr) {
    if (this.checkArr(arr) === false) {
      return this.createTree(this.checkArr(mergeSort(arr)));
    } else if (this.checkArr(arr) === true) {
      return "Array is sorted";
    }
  }

  createRoot(arr) {}
}

class Tree {}

module.exports = Bst;
