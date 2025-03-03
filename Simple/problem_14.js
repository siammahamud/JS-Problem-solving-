const findPowerOfTwo = (num) => {
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) return true;
  }

  return false;
};
console.log(findPowerOfTwo(-32));
