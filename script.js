// //  Count the vowels in a string
// // vowels are = a,e,i,o,u
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
// // Now call a function which will be Count  the Vowels in the string -

// function countVowels(sentence) {
//     let count = 0;
//     const letters = Array.from(sentence)
//     letters.forEach(Function(value){
//         if(vowels.includes(value))
//     count++
// });
// return count++;
// };

// console.log(countVowels("ikram akbar"));
// program to count the number of vowels in a string

function countVowel(str) {
  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;

  // return number of vowels
  return count;
}

// take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

console.log(countVowel("ikram akbar"));

//Write a function that will  find out a random number form 1 to 10;

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomNum(2,20))
//

function randomNumber(min, max) {
  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  }

  if (min <= 0) {
    return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log(randomNumber(10,14));
function randomBetween(min, max) {
  if (min < 0) {
    return min + Math.random() * (Math.abs(min) + max);
  } else {
    return min + Math.random() * max;
  }
}
console.log(randomBetween(4,2));