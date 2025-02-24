const FindMax = (arr) => {
  arr = arr.reduce((acc, cur) => (acc > cur ? acc : cur));
  return arr;
};

const numbers = [2, 4, 5, 9, 4, 7, 3];
console.log(FindMax(numbers));
