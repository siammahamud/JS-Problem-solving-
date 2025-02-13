const sortingArray = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        newArray.push(arr[i]);
      } else {
        newArray.push(arr[j]);
      }
    }
  }
  return newArray;
};

console.log(sortingArray([5, 4, 6, 3, 9]));
