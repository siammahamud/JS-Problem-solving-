///////////////find the largest string within a sentence string /////////////

const input = "I love my country very much, Bangladesh";
const largestWordFinder = (str) => {
  if (str.trim().length < 1) {
    return false;
  }
  const wordArray = str.trim().split(" ");
  //   const sortArr = wordArray.sort((a, b) => b.length - a.length);
  //   return sortArr[0];
  console.log(wordArray);
  return wordArray.reduce(
    (acc, curr) => (curr.length > acc.length ? curr : acc),
    ""
  );
};

console.log(largestWordFinder(input));
