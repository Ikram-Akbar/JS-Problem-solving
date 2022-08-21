let array = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}

console.log(largest);

// find out the duplicate num from an array

// init the array
const number = [1, 2, 4, 2, 4, 6, 7];
// declare a variable for finding duplicate num form an array
// then use array.filter Method
const duplicate = number.filter((value, index, array) => {
  return array.indexOf(value) == index;
});
console.log(duplicate);
