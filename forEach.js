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

// ! RECAP
// ! forEach iterates over an array, runs a callback on each value and
// ! forEach returns undefined
