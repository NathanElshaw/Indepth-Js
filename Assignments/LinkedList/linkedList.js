const linkList = () => {
  const append = () => {
    console.log(arg);
  };
  return {
    append,
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
