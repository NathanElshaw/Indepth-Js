class LinkedList {
  constructor() {
    (this.HEAD = null), (this.length = 0);
  }

  append(data) {
    let current = this.HEAD;
    for (let i = 0; i < this.length; i++) {
      if (current.next === null) {
        current.next = new Node(data, null);
        this.length++;
      } else {
        current = current.next;
      }
    }
  }

  preappend(data) {
    let current = this.HEAD;
    const newNode = new Node(data, this.HEAD);
    this.HEAD = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.HEAD;
  }

  tail() {
    let current = this.HEAD;
    for (let i = 0; 0 < this.length; i++) {
      if (current.next === null) {
        return current;
      } else {
        current = current.next;
      }
    }
  }
  index(index) {
    if (index >= this.length || index < 0) return null;

    let current = this.HEAD;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  pop() {
    let current = this.HEAD;
    for (let i = 0; i < this.length; i++) {
      if (current.next.next == null) {
        current.next = null;
        this.length--;
      }
      current = current.next;
    }
  }

  contains(value) {
    let current = this.HEAD;
    for (let i = 0; i < this.length; i++) {
      if (current.value === value) {
        return true;
      } else if (current.next === null) {
        return false;
      } else {
        current = current.next;
      }
    }
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...value) {
  const ll = new LinkedList();
  for (let i = value.length - 1; i >= 0; i--) {
    ll.insertAtHead(value[i]);
  }
  return ll;
};

const ll = new LinkedList();

ll.preappend(10);
ll.preappend(20);
ll.append(5);
ll.pop();
console.log(ll);
