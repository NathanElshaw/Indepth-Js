function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
    // saves usages by recalling the fuction if the first part is not statified
  }
}

//Pratice

function sumAll(n) {
  let a = n;
  let b = 0;
  for (i = 0; i < a; i++) {
    n = n + b;
    b++;
  }
  return n;
}

function sumAll2(n) {
  if ((n = 1)) {
    return n;
  } else {
    return n + sumAll2(n - 1);
  }
}

console.log(sumAll2(100));
