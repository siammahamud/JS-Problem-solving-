//////////find the factorial of a number ///////

const factorial = (num) => {
    let fact = 1;
  for (i = num; i >= 1; i--) {
    if (num === 0 || num === 1) {
      return 1;
    }
   fact = fact * i;
  }
  return fact;
};

console.log(factorial(4));
