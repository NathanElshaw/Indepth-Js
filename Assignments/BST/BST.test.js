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

describe("#find", () => {
  test("Finds an node with the value", () => {
    const tree = new Bst();

    tree.createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    expect(tree.find(16)).toMatchObject({ data: 16, left: null, right: null });
  });
  test("Does not finds an node with the value", () => {
    const tree = new Bst();

    tree.createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    expect(tree.find(19)).toBe(null);
  });
});
