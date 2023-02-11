let arr = [];

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let merArr = [5, 2, 1, 3, 6, 4];

function mergeSort(n) {
  console.log(n);
  let arrLength = n.length;
  if (arrLength < 2) {
    return n;
  } else {
    let newArr = [];
    let middle = arrLength / 2;
    let left = n.slice(0, middle);
    let right = n.slice(middle, arrLength);
    console.log(left, right);
    return newArr.push(mergeSort(right) < mergeSort(left));
  }
}

console.log(mergeSort(merArr));
