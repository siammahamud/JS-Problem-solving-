// function sumOfSquare(arr) {
//   return arr.reduce((acc, curr) => (acc += curr * curr), 0);
// }

// console.log(sumOfSquare([1, 2, 3]));

const findMinimum = (arr) => {
//   arr = arr.sort((a, b) => a - b);
//   return arr[0];
   return Math.min(...arr);  /// by spreading array , converting the array into numbers 
};

console.log(findMinimum([5, 2, 3, 4, 5, 1]));
