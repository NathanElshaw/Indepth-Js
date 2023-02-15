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

  insert(value) {
    let inserted = false;
    let current = this.root;
    while (inserted === false) {
      if (current.right == null && current.data <= value) {
        current.right = new Node(value);
        inserted = true;
      } else if (current.left == null && current.data > value) {
        current.left = new Node(value);
        inserted = true;
      }
      if (value >= current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
  }

  delete(value) {
    let deleted = false;
    let current = this.root;
    while (deleted === false) {
      if (current.right || current.left === value) {
        {
          if (current.right === value) {
            if (current.right !== null) {
              if (current.right.right || current.right.left !== null) {
                current.right = current.right.right;
              } else {
                current.right = null;
              }
            }
          }
          if (current.left !== null) {
            if (current.left.right || current.left.left !== null) {
              current.left = current.left.right;
            } else {
              current.left = null;
            }
            deleted = true;
          }
        }
      } else {
        if (current.data <= value) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    }
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
//bt.delete(10);

console.log(prettyPrint(bt.root));

//module.exports = Bst;
