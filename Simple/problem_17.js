///write a function to check if a given string starts with a specific string//
const findSameStr = (arr) => {
  let givenStr = arr[0];
  givenStr = givenStr.split(" ");
  if (givenStr[0].toLowerCase() === arr[1].toLowerCase()) return true;
  else {
    return false;
  }
  console.log(givenStr);
};

console.log(findSameStr(["hello world", "hellO"]));
