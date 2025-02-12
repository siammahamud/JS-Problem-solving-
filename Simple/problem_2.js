///////////Generate # before a string and capitalilze every word and concatenate the sting removing spaces/////////////////////

const inputstr = "My name is siam mahamud";
const generateHash = (str) => {
  str = str.split(" ");
  //   str = str.map((singleWord) => {
  //     return singleWord.replace(singleWord[0], singleWord[0].toUpperCase());
  //   });
  str = str.map(
    (singleStr) => singleStr.charAt(0).toUpperCase() + singleStr.slice(1)//we can also use  here singleStr[0].toUpperCase   
  );
  str = str.join("");
  return `#${str}`;
  //   console.log(str);
};

console.log(generateHash(inputstr));
