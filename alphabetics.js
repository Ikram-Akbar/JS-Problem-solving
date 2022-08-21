//  Write a JavaScript function that returns a passed string with letters in alphabetical order.

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

// ===================================================
function alphabet(strings) {
  if (strings == null || strings == Number) {
    console.log("please insert only string");
  } else {
    let newArr = strings.split("");
    newArr.sort();
      let sortedStrings = newArr.join("");
      return sortedStrings;
  }
}
// console.log(alphabet("ikram akbar"));
console.log(alphabet(454545));