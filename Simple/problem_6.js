///////find max number of an array ///////////

const FindMax = (arr) => {
  arr = arr.reduce((acc, cur) => (acc > cur ? acc : cur));
  return arr;
};

const findMax = (arr) => {
  return Math.max(...arr); ///// spread operator converts the array into numbers //////
};

const numbers = [2, 4, 5, 9, 4, 7, 3];
console.log(findMax(numbers));
