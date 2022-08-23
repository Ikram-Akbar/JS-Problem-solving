//1  Find the largest item from a given list
let array = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log(largest);
// In this method, what we do is that we compare the index of all the items of an array with the index of the first time that number occurs. If they don’t match, that implies that the element is a duplicate.All such elements are returned in a separate array using the filter() method.

// with function 
// let array = [3, 6, 2, 56, 32, 5, 89, 32];
const largestNumber = (array) => {
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
};
console.log(largestNumber(array));





// ==================================================================
// ==================================================================
// 2 . 
function reverseArr(input) {
  let reverse = [];
  for (let i = input.length - 1; i >= 0; i--) {
    reverse = [...reverse, input[i]];
  }
  return reverse;
}
let list = [3, 5, 7, 8];
let result = reverseArr(list);
console.log(result);



// =================================================
// ============================================

let array = [12, 5, 8, 3, 17];
let element = 10; //Element to be searched
const checkIncludes = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
};
console.log(checkIncludes(array, element));




// =====================================


// 5. Write a program to display all prime numbers within a range
// take input from the user
const lowerNumber = 1
let higherNumber = 10000

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
// ============================================================================

// =============================================================================
//6  Reverse a given integer number

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

// or With the regular function : 
function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}

// console.log(reversedNum(123456789));


// =========================================================


//problem-7

let arr1 = [1, 1, 2, 2, 3, 8, 4, 6];
const printOddIndex = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
printOddIndex(arr1);


// =============================================================

//problem-8

let array = [3, 6, 2, 56, 32, 5, 89, 32];
const largestNumber1 = (array) => {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}
console.log(largestNumber1(array));



//9
let str = "I want to count the number of occurrences of each char in this string";
const occurrencesCount = (str) => {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        count[char] = count[char] ? count[char] + 1 : 1;
    }
    return count;
}
console.log(occurrencesCount(str));

//11. find the vowel from an staring :

// init the vowels
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// create a function for find the vowels form a string.

const countVowels = (str) => {
  //int the count variable
  let count = 0;
  //
  const letters = Array.from(str);
  letters.forEach((letters) => {
    if (vowels.includes(letters)) {
      count++;
    }
  });

  return count;
};
console.log(countVowels("New programmer in the town"));
// ===============================================================
//  12. Write a JavaScript function that returns a passed string with letters in alphabetical order.

/* 
steps:
01:Split the string into an array of characters using split() method.
02:Apply the sort() method to sort the characters in alphabetical order.
03:Finally, we use the join() method to join the characters back into a string.
 
 */
function alphaOrder(str) {
  // 01:Split the string into an array of characters using split() method.
  let arr = str.split("");
  // 02:Apply the sort() method to sort the characters in alphabetical order.
  arr.sort();
  // 03:Finally, we use the join() method to join the characters back into a string.
  let sortedStr = arr.join("");

  return sortedStr;
}
console.log(alphaOrder("ikram akbar"));

// =========================================================
// 13

let text = "I want to count the number of occurrences of each char in this string";
const toUpperCase = (str) => {
    const result = str.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    return result;
}
console.log(toUpperCase(text));

// =======================================
// 14

function unique_char(str) {
    let uniql = "";
    for (let x = 0; x < str.length; x++) {
        let char = str.charAt(x);
        if (uniql.indexOf(char) == -1 || char == ' ') {
            uniql += str[x];
        }
    }
    return uniql;
}
console.log(unique_char("the fox news newspaper"));
// ============================================

// 15

let combine = function (a, min) {
  let fn = function (n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (let j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
    return;
  };
  let all = [];
  for (let i = min; i < a.length; i++) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
};
console.log(combine([1, 2, 3, 4], 1));


// 17. check leap year in a range
// range 

function leap_year_range(st_year, end_year) {
  let year_range = [];
  for (let i = st_year; i <= end_year; i++) {
    year_range.push(i);
  }
  let new_array = [];

  year_range.forEach(function (year) {
    if (test_LeapYear(year)) new_array.push(year);
  });

  return new_array;
}


function test_LeapYear(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

console.log(leap_year_range(2000, 2012));

 
// find out the duplicate num from an array

// init the array
const number = [1, 2, 4, 2, 4, 6, 7];
// declare a variable for finding duplicate num form an array
// then use array.filter Method
const duplicate = number.filter((value, index, array) => {
  return array.indexOf(value) == index;
});
console.log(duplicate);
// ===============================================================================


// ===============================================================================


// 18. Write an algorithm to swap two given numbers in without using a temporary variable without using any library function.

let a = 5;
let b = 15;
console.log(`the value of a = ${a} and b = ${b}`);
//  the value of a = 5 and b = 15
[a, b] = [b, a];
console.log(`the value of a = ${a} and b = ${b}`);
// the value of a = 15, b = 5

// ===============================================================================










