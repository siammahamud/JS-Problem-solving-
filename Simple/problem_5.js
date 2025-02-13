//  Racecar = racecar
const findPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, ""); // //// remove all space placed inside a string and none letter like comma(,) //////
  const arr = str.split("").reverse().join("");
  return arr === str ? "palindrome word " : "Not palindrome";
};
// console.log(findPalindrome("racecar"));
console.log(findPalindrome("racecar ,issi racecar"));
