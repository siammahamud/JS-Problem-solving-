/////////// count occurance of character ///////////
//  console.log(CountChar('Minicipality',"I")); /////// output : 4

const countChar = (mainStr, compChar) => {
  let num = 0;
  mainStr = mainStr.split("");

  //   compChar = compChar.toLowerCase();
  //   mainStr.forEach((chr) => {
  //     if (chr.toLowerCase() === compChar.toLowerCase()) {
  //       num = num + 1;
  //       return num;
  //     }
  //   });
  //   return num;

  const ans = mainStr.reduce(
    (acc, curr) =>
      acc + (curr.toLowerCase() === compChar.toLowerCase() ? 1 : 0 ),
    0
  );
  return ans;
};
console.log(countChar("Minicipality", "I"));
