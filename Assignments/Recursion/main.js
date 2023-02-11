let arr = [];

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let merArr = [5, 2, 1, 3, 6, 4];

function mergeSort(n) {
  let arrLength = n.length;
  let newArr = [];
  let middle = arrLength / 2;
  let left = n.slice(0, middle);
  let right = n.slice(middle, arrLength);
  if (arrLength < 2) {
    return n;
  } else {
  }
}

console.log(mergeSort(merArr));
