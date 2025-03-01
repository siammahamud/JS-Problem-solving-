const removeDuplicate = (arr) => {
  const arrCount = {};
  let ans = [];
  for (let num of arr) {
    arrCount[num] = (arrCount[num] || 0) + 1;
  }
  console.log(arrCount);
  for (let num of arr) {
    if (arrCount[num] === 1) {
      ans.push(num);
    }
  }
  return ans;
};

console.log(removeDuplicate([1, 2, 2, 4, 5, 6, 6]));
