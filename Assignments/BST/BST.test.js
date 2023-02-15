const Bst = require("./BST");

describe("#CheckArr", () => {
  test("Checks to see if a sorted array is sorted", () => {
    const tree = new Bst();

    expect(tree.checkArr([1, 2, 3, 4])).toBe(true);
  });
  test("Checks to see if a unsorted array is sorted", () => {
    const tree = new Bst();

    expect(tree.checkArr([1, 2, 3, 4, 2])).toBe(false);
  });
});

describe("#createTree", () => {
  test("will make a binary tree from a sorted array", () => {
    const tree = new Bst();

    expect(tree.createTree([1, 2, 3, 4, 5])).toBe("Array is sorted");
  });
  test("will make a binary tree from a unsorted array", () => {
    const tree = new Bst();

    expect(tree.createTree([1, 2, 3, 4, 5, 2])).toBe("Array is sorted");
  });
});
