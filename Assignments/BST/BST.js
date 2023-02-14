class Bst {
  constructor(arr, start, end) {
    this.arr = arr;
    this.start = start;
    this.end = end;
  }

  createTree(arr) {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle - 1);
    let right = arr.slice(middle, arr.length);
    if (arr.length < 2) {
      return arr;
    } else {
      this.createRoot();
    }
  }

  createRoot(arr) {}
}

class Tree {
  constructor(node, left, right) {
    this.Value = node;
    this.left = left;
    this.right = right;
  }
}

const bst = new Bst();

bst.createTree([1, 2, 3, 5, 6, 7]);
