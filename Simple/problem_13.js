////count the number of vowels present in a given string ////////
let vowels  = ['a', 'e', 'i', 'o', 'u'];
const countVowels = (str) => {
    let counter = 0;
    vowels.forEach((char)=> {
        if(str.includes(char)){
            counter ++;
        }
    })
    return counter;
}

console.log(countVowels("Hello Worldi"));