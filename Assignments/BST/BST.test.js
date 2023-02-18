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

describe("#levelOrder", () => {
  test("Return a level order traversal from a binary tree", () => {
    const tree = new Bst();

    tree.createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    expect(tree.levelOrder()).toMatchObject([
      8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15, 16,
    ]);
  });
});

describe("#checkBalance", () => {
  test("Check if a tree is balanced", () => {
    const tree = new Bst();
    tree.createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    tree.insert(17);
    tree.insert(18);

    expect(tree.checkBalance()).toBe("This Tree is unbalanced");
  });
  test("Check is a balanced tree is balanced", () => {
    const tree = new Bst();
    tree.createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

    expect(tree.checkBalance()).toBe("This Tree is Balanced");
  });
});
