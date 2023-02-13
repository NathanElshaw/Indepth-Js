class LinkedList {
  constructor() {
    (this.HEAD = null), (this.length = 0);
  }

  append(data) {
    const newNode = new Node(data, null);
    while (this.next != null) {
      this.next = newNode;
    }
    this.length++;
  }

  insertAtHead(data) {
    const newNode = new Node(data, this.HEAD);
    this.HEAD = newNode;
    this.length++;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const ll = new LinkedList();

ll.insertAtHead(10);
ll.append(15);

console.log(ll);
