/*
1. Create a function that checks if an array is sorted -Check
2. If the array is unsorted when put into the CreateTree it sorts it -Check
When an  sorted array is given it creates a binary tree

*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

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

  createTree(arr, start, end) {
    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = arr.length - 1;
    }
    if (start > end) {
      return null;
    }
    var mid = parseInt((start + end) / 2);
    var node = new Node(arr[mid]);
    if (this.root === null) {
      this.root = node;
    }
    node.left = this.createTree(arr, start, mid - 1);
    node.right = this.createTree(arr, mid + 1, end);
    return node;
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const bt = new Bst();

bt.createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(prettyPrint(bt.root));

//module.exports = Bst;
