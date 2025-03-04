function sumOfSquare(arr) {
  return arr.reduce((acc, curr) => acc += ( curr * curr),0);
}

console.log(sumOfSquare([1, 2, 3]));
