//////find the non repeating character from an string /////////
function firstNonRepeatingChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("aabbccdde")); // Output: 'e'
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
console.log(firstNonRepeatingChar("abcdabc")); // Output: 'd'
