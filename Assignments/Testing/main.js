module.exports = {
  autoCap(input) {
    let first = input.charAt(0);
    first = first.toUpperCase();
    first = first.concat(input.slice(1, input.length));
    return first;
  },

  reverseStr(input) {
    let result = "";
    let n = input.length;
    for (let i = 0; i < n; i++) {
      result = result.concat(input.substr(-1, 1));
      input = input.slice(0, input.length - 1);
    }
    return result;
  },

  ceaserCiper(input, offset) {
    const Alph = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let result = "";
    let n = input.length;
    for (let i = 0; i < n; i++) {
      let char = input.charAt(i);
      const getLetter = (char) => {
        return Alph[Alph.indexOf(char) + offset];
      };
      if (Alph.indexOf(char) == -1) {
        result = result.concat(char);
      } else if (char === char.toUpperCase()) {
        result = result.concat(getLetter(char).toUpperCase());
      } else {
        result = result.concat(getLetter(char));
      }
    }
    return result;
  },

  analyzeArray(arr) {
    const min = (arr) => {
      let low = 10 ^ 6;
      for (let i = 0; i < arr.length; i++) {
        low = arr[i] < low ? (low = arr[i]) : (low = low);
      }
      return low;
    };
    const max = (arr) => {
      let maxR = 0;
      for (let i = 0; i < arr.length; i++) {
        maxR = arr[i] > maxR ? (maxR = arr[i]) : (maxR = maxR);
      }
      return maxR;
    };
    const avg = (arr) => {
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
      }
      result = result / arr.length;
      return result;
    };
    const length = (arr) => {
      let result = arr.length;
      return result;
    };
    return {
      min: min(arr),
      max: max(arr),
      avg: avg(arr),
      legnth: length(arr),
    };
  },
};
