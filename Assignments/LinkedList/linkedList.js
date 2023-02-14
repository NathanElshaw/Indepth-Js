class LinkedList {
  constructor() {
    (this.HEAD = null), (this.length = 0);
  }

  append(data) {
    let current = this.HEAD;
    if (this.HEAD === null) {
      this.HEAD = new Node(data, this.HEAD);
      this.length++;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (current.next === null) {
          current.next = new Node(data, null);
          this.length++;
        } else {
          current = current.next;
        }
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
        let value = current.next.value;
        current.next = null;
        this.length--;
        return value;
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

  find(value) {
    let current = this.HEAD;
    for (let i = 0; i < this.length; i++) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
    }
  }

  toString() {
    let current = this.HEAD;
    let string = `LinkedList: ${current.value}`;
    current = current.next;
    for (let i = 1; i < this.length; i++) {
      string = string.concat(" -> ", current.value);
      current = current.next;
    }
    string = string.concat(" -> Null");
    return string;
  }

  insertAt(index, value) {
    if (index < 0 || index >= this.length - 1) return null;
    let current = this.HEAD;
    for (let i = 0; i < this.length; i++) {
      if (i === index - 1) {
        let next = current.next;
        current.next = new Node(value, next);
        this.length++;
      }
      current = current.next;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.length) return null;
    let current = this.HEAD;
    for (let i = 0; i < this.length - 1; i++) {
      if (i === index - 1) {
        let next = current.next.next;
        current.next = next;
        this.length--;
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

module.exports = LinkedList;
