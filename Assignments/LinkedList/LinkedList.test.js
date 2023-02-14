const LinkedList = require(`./linkedList`);

describe("#append", () => {
  test("adds element to the end of the LL", () => {
    const ll = new LinkedList();
    ll.append(20);

    expect(ll.HEAD.value).toBe(20);
  });
});

describe("#preappend", () => {
  test("replaces current head", () => {
    const ll = new LinkedList();

    ll.append(20);
    ll.preappend(10);

    expect(ll.HEAD.value).toBe(10);
  });
});

describe("#size", () => {
  test("return the size of the Linked List", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.length).toBe(3);
  });
});

describe("#head", () => {
  test("returns the head of the Linked list", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.head().value).toBe(10);
  });
});

describe("#tail", () => {
  test("returns the end of the Linked List", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.tail().value).toBe(30);
  });
});

describe("#index", () => {
  test("return a linked list value for the index provided", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.index(1).value).toBe(20);
  });
});

describe("#pop", () => {
  test("removes the last item of the linked list", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.pop()).toBe(30);
  });
});

describe("#contains", () => {
  test("returns true or false for if a item exists or not", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.contains(20)).toBe(true);
    expect(ll.contains(25)).toBe(false);
  });
});

describe("#find", () => {
  test("returns the index of the Linked list", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.find(30)).toBe(2);
  });
});

describe("toString", () => {
  test("returns the Linked list as a string", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.toString()).toBe("LinkedList: 10 -> 20 -> 30 -> Null");
  });
});

describe("#insertAt", () => {
  test("inserts a linked list item given the index", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);
    ll.insertAt(1, 15);

    expect(ll.toString()).toBe("LinkedList: 10 -> 15 -> 20 -> 30 -> Null");
  });
});

describe("removeAt", () => {
  test("removes a Linked List item at the given index", () => {
    const ll = new LinkedList();

    ll.append(10);
    ll.append(20);
    ll.append(30);
    ll.removeAt(2);
    expect(ll.toString()).toBe("LinkedList: 10 -> 20 -> Null");
  });
});
