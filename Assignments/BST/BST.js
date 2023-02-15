/*
1. Create a function that checks if an array is sorted -Check
2. If the array is unsorted when put into the CreateTree it sorts it -Check
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
  constructor() {
    this.root = null;
  }

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
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    mid = arr[mid];
    if (arr.length <= 2) {
      if (mid == right) {
        return { value: mid, left: parseInt(left), right: null };
      }
    }
    console.log(left, mid, right);
    const newRoot = new Node(mid);
    if (this.root == null) {
      this.root = newRoot;
    }
    return {
      value: mid,
      left: this.createTree(left),
      right: this.createTree(right),
    };
  }
}

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const bt = new Bst();

bt.createTree([1, 2, 3, 4, 5]);

console.log(bt);

//module.exports = Bst;
