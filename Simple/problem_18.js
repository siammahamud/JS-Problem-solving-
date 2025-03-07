////find median of a given array ////
const findMedian = (arr) => {
  let middle = Math.floor(arr.length/ 2 );
  const newArr = arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    const result = (arr[middle] + arr[middle + 1]) / 2;
    return result;
  } else if(arr.length %2 !== 0) {
    return arr[middle];
  }
};

console.log(findMedian([1, 3, 5, 6, 14, 8, 8, 6]));
