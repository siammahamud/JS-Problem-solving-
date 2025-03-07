////find median of a given array ////
const findMedian = (arr) => {
  let middle = arr.length / 2 - 1;
  const newArr = arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    const result = (arr[middle] + arr[middle + 1]) / 2;
    return result;
  } else if(arr.length %2 !== 0) {
    return arr[middle];
  }
};

console.log(findMedian([1, 3, 5, 6,  7, 8, 8]));
