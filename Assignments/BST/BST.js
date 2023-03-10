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
    if (this.checkArr(arr) == false) {
      return "This array isnt sorted";
    } else {
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

  insert(value) {
    let inserted = false;
    let current = this.root;
    while (inserted === false) {
      if (current.right == null && current.data <= value) {
        current.right = new Node(value);
        this.treeBalance();
        inserted = true;
      } else if (current.left == null && current.data > value) {
        current.left = new Node(value);
        this.treeBalance();
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
      let temp = null;
      if (current.data < value) {
        temp = current;
        current = current.right;
      } else {
        temp = current;
        current = current.left;
      }
      if (current.data === value) {
        if (current.right != null) {
          let newNode = new Node(
            current.right.data,
            current.right.left,
            current.right.right
          );
          current.data = newNode.data;
          current.right = current.right.right;
        } else if (current.left != null) {
          let newNode = new Node(current.left.data, current.left, current.left);
          current.data = newNode.data;
          current.left = newNode.left;
          current.right = newNode.right;
        } else {
          if (temp.right.data == value) {
            temp.right = null;
          } else {
            temp.left = null;
          }
        }
        deleted = true;
      }
    }
  }

  find(value, root) {
    if (root === undefined) {
      root = this.root;
    }
    if (value === root.data) {
      return root;
    }
    if (root.left == null && root.right == null) {
      return null;
    }
    if (value >= root.data) {
      root = root.right;
      return this.find(value, root);
    } else {
      root = root.left;
      return this.find(value, root);
    }
  }

  levelOrder(current, result) {
    if (current === undefined) {
      current = [this.root];
    }
    if (result === undefined) {
      result = [];
    }
    let next = [];
    if (current.length === 0) {
      return result;
    }
    current.forEach((root) => {
      if (root !== null || undefined) {
        if (root.left == null && root.right == null) {
          result.push(root.data);
        } else {
          next.push(root.left);
          next.push(root.right);
          result.push(root.data);
        }
      }
    });
    return this.levelOrder(next, result);
  }

  postOrder(node, result) {
    if (node === undefined) {
      node = this.root;
    }

    if (result === undefined) {
      result = [];
    }

    if (node == null) {
      return;
    }

    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.data);
    return result;
  }

  inOrder(node, result) {
    if (node === undefined) {
      node = this.root;
    }

    if (result === undefined) {
      result = [];
    }

    if (node == null) {
      return;
    }

    this.inOrder(node.left, result);
    result.push(node.data);
    this.inOrder(node.right, result);
    return result;
  }

  preOrder(node, result) {
    if (node === undefined) {
      node = this.root;
    }

    if (result === undefined) {
      result = [];
    }

    if (node == null) {
      return;
    }

    result.push(node.data);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  height(value, root, depth) {
    if (depth === undefined) {
      depth = 0;
    } else {
      depth++;
    }
    if (root === undefined) {
      root = this.root;
    }
    if (value === root.data) {
      return depth;
    }
    if (root.left == null && root.right == null) {
      return null;
    }
    if (value >= root.data) {
      root = root.right;
      return this.height(value, root, depth);
    } else {
      root = root.left;
      return this.height(value, root, depth);
    }
  }

  checkBalance(root) {
    if (root === undefined) {
      root = this.root;
    }
    if (this.returnBalance(root) > 1) {
      return "This Tree is unbalanced";
    } else {
      return "This Tree is Balanced";
    }
  }

  returnBalance(root) {
    if (root == null) {
      return -1;
    }
    let left = this.returnBalance(root.left);
    let right = this.returnBalance(root.right);
    if (Math.abs(left - right) > 1) {
    }
    return Math.abs(left - right);
  }

  storeNodes(root, nodes) {
    if (root == null) {
      return;
    }
    this.storeNodes(root.left, nodes);
    nodes.push(root.data);
    this.storeNodes(root.right, nodes);
  }

  treeBalance(root) {
    if (root === undefined) {
      root = this.root;
    }
    let nodes = [];
    this.storeNodes(root, nodes);
    let n = nodes.length;
    this.root = null;
    return this.createTree(nodes, 0, n - 1);
  }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "???   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "????????? " : "????????? "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "???   "}`, true);
  }
};

module.exports = Bst;
