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
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
    ];
  },
};
