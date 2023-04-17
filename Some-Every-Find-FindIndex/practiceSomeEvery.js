// ! some
//  ! Iterates through an array
//  ! Runs a callback on each value in the array
//  ! If the callback returns true for at least one single value, return true
//  ! Otherwise, return false
//  ! the result of the callback will always be a boolean

let nums = [10, 17, 91];

console.log(
  nums.some(function (value, index, array) {
    return value < 3;
  })
);

console.log(
  nums.some(function (value, index, array) {
    return value > 10;
  })
);

// ? How Does It Work?
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === true) {
      return true;
    }
  }
  return false;
}

console.log(
  some(nums, (num) => {
    return num <= 10;
  })
);

// * When You Would Use Some
// * You need to determine if at least one value in an array exists and you have to ! determine this by using a callback (not includes/indexOf)
// * A simple alternative to using filter and seeing if the array contains at least one element

// ! every
// ! Iterates through an array
// ! Runs a callback on each value in the array
// ! If the callback returns false for any single value, return false
// ! Otherwise, return true
// ! the result of the callback will always be a boolean

console.log(
  nums.every(function (value, index, array) {
    return value < 0;
  })
);

console.log(
  nums.every(function (value, index, array) {
    return value > 2;
  })
);

// ? How Does It Work?
function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      return false;
    }
  }
  return true;
}

console.log(
  every(nums, (num) => {
    return num <= 10;
  })
);

//  * When You Would Use Every
// * You need to determine if every value in an array exists and you have to determine  ! this by using a callback
// * A simple alternative to using filter and seeing if the filtered array is of the same length as the original array

// ! Recap
// ! some iterates through an array and runs a callback on each value,
// ! if the callback for at least one value returns true, some returns true, otherwise false
// ! every iterates through an array and runs a callback on each value,
// ! if the callback at any time returns false, every returns false
