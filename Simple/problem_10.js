///Calculate the sum of digits of a number////
// const sumOfDigits = (num) => {
//   num = num.toString().split("");
//   const sum = num.reduce((acc, curr) => parseInt(curr) + parseInt(acc), 0);
//   return sum;
// };


const sumOfDigits = (num) => {
   const arr = Array.from(String(num), Number);
   return arr.reduce((acc, curr) => acc + curr, 0);
}



console.log(sumOfDigits(112249));
