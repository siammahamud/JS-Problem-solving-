///// Find the average of an number array /////

const findAvg = (arr) => {
  let result = arr.reduce((acc, curr) => acc + curr, 0);
    result = result / arr.length;
  return result;
};
const array = [2, 3, 4, 5, 6];
console.log(findAvg(array));
