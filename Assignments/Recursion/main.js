let arr = [];

function fib(n) {
  return n <= 1 ? arr.push(n) : fib(n - 1) + fib(n - 2);
}

console.log(fib(8));
console.log(arr);