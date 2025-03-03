const findPowerOfTwo = (num) => {
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) return true;
  }

  return false;
};
// console.log(findPowerOfTwo(-32));

function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(8)); // true (8 = 1000)
console.log(isPowerOfTwo(16)); // true (16 = 10000)
console.log(isPowerOfTwo(10)); // false (10 = 1010)
console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(1)); // true (1 = 0001)
