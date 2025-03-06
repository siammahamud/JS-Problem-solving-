const findSameStr = (arr) => {
return  arr.map((str) => {
    if (str.includes(arr[0])) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(findSameStr(["hello", "hello world"]));
