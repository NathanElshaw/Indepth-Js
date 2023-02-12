const linkList = () => {
  let HEAD = null;
  let length = 0;

  const append = (value) => {
    const NewNode = Node(value);
    length++;
    if (HEAD == null) {
      return (HEAD = NewNode);
    }
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = NewNode;
  };

  const preappend = (value) => {
    const newNode = Node(value);
    length++;
    if (HEAD !== null) {
      return (HEAD = newNode);
    }
    newNode.nextNode = HEAD;
    HEAD = newNode;
  };

  return {
    append,
    preappend,
  };
};

const Node = (input) => {
  return {
    value: input || null,
    nextNode: null,
    appendValue(newInput) {
      this.value = newInput;
    },
  };
};

console.log(Node.appendValue("new"));
