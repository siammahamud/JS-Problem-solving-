const findMax = (arr) => {
  let counts = {};
  let maxNumber = 0;
  let mode;
  arr.forEach((e) => {
    counts[e] = (counts[e] || 0) + 1;
    if (counts[e] > maxNumber) {
      maxNumber = counts[e];
      mode = e;
    }
  });
  return mode;
};
