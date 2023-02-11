let arr = [];

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const mergeSortRec = (arr) => {
  if (arr.length === 0) return "Please provide a non empty array!";
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSortRec(left), mergeSortRec(right));
};

const merge = (leftArr, rightArr) => {
  //To merge the both incoming arrays
  const result = [];

  let iL = 0;
  let iR = 0;

  while (iL < leftArr.length && iR < rightArr.length) {
    if (leftArr[iL] < rightArr[iR]) {
      result.push(leftArr[iL]);
      iL++;
    } else {
      result.push(rightArr[iR]);
      iR++;
    }
  }

  while (iL < leftArr.length) {
    result.push(leftArr[iL]);
    iL++;
  }

  while (iR < rightArr.length) {
    result.push(rightArr[iR]);
    iR++;
  }
  return result;
};

console.log(mergeSortRec([5, 2, 1, 3, 6, 4]));
