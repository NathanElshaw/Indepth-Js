module.exports = {
  autoCap(input) {
    let first = input.charAt(0);
    first = first.toUpperCase();
    first = first.concat(input.slice(1, input.length));
    return first;
  },

  reverseStr(input, n) {
    n === undefined ? (n = 0) : (n = n);
    if (n == input.length - 1) {
      return input;
    }
    let last = input.substr(-1, 1);
    last = last.concat(input.slice(0, input.length - 1));
    console.log(last);
    n++;
    return this.reverseStr(last, n);
  },
};
