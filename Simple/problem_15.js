// function sumOfSquare(arr) {
//   return arr.reduce((acc, curr) => (acc += curr * curr), 0);
// }

// console.log(sumOfSquare([1, 2, 3]));

const findMinimum = (arr) => {
  arr = arr.sort((a, b) => a - b);
  return arr[0];
};

console.log(findMinimum([5, 2, 3]));
