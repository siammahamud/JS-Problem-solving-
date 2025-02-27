///Calculate the sum of digits of a number////
const sumOfDigits = (num) => {
  num = num.toString().split("");
  const sum = num.reduce((acc, curr) => parseInt(curr) + parseInt(acc), 0);
  return sum;
};




console.log(sumOfDigits(11224));
