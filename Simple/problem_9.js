const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

const AreArrEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(AreArrEqual(arr1, arr2));
