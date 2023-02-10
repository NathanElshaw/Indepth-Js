function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
    // saves usages by recalling the fuction if the first part is not statified
  }
}

//Pratice
//For loop
function sumAll(n) {
  let a = n;
  let b = 0;
  for (i = 0; i < a; i++) {
    n = n + b;
    b++;
  }
  return n;
}
//Recursion
function sumAll2(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumAll2(n - 1);
  }
}
//Arithmatic progression
function sumAll3(n) {
  return (n * (1 + n)) / 2;
}

//Factorials
//Recursion
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

//Fibonacci
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(2));
