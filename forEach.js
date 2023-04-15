//  ! Loops through an array
//  ! Runs a callback function for each value in the array and then returns undefined
//  ! forEach will always return undefined - no matter what

// TODO: learn basics of forEach
const colors = ['green', 'purple', 'red', 'black'];

// colors.forEach((item, index, array) => {
//   console.log(`${index}:${item.toUpperCase()}`);
// });

// let total = 0;
// const salePrices = [29.0, 0.99, 99.99, 50.99];
// salePrices.forEach((price) => {
//   total += price;
// });

// console.log(`$${total}`);

// TODO: Create own 'forEach' method

// * initialize vars
let totalAge = 0;
const agesOfChildren = [3, 9, 13];

// * write forEach logic
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// * Call our version of forEach
myForEach(colors, function (color, i) {
  console.log(color.toUpperCase(), `at index of:`, i);
});

//  ! You want to iterate over an array, but the return value of your callback is not important
//  ! Almost all of the time there are better options…

// ! RECAP
// ! forEach iterates over an array, runs a callback on each value and
// ! forEach returns undefined
