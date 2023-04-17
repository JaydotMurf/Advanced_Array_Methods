// ! Creates a new array
// ! Iterates through an array
// ! Runs a callback function for each value in the array
// ! Adds the result of that callback function to the new array
// ! Returns the new array
// ! map always returns a new array of the same length

let numbers = [1, 2, 3];

const newNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(newNumbers);

const people = [
  {
    id: 1,
    name: 'Jerraill',
    age: 31,
    sex: 'male',
  },
  {
    id: 2,
    name: 'Sarah',
    age: 33,
    sex: 'female',
  },
  {
    id: 3,
    name: 'Nariyah',
    age: 13,
    sex: 'female',
  },
  {
    id: 4,
    name: 'Sierrah',
    age: 9,
    sex: 'female',
  },
  {
    id: 5,
    name: 'Lelah',
    age: 5,
    sex: 'female',
  },
];

const firstNames = people.map((person) => {
  return person.name;
});

console.log(firstNames);

// * write map logic
function myMap(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const val = callback(arr[i], i, arr);
    newArr.push(val);
  }
  return newArr;
}

const familyMemebers = myMap(people, function (person) {
  return person.name;
});

console.log(familyMemebers);

const repeatedStrings = myMap(['a', 'b', 'c', 'd'], (letter, idx) => {
  return letter.repeat(idx);
});

console.log(repeatedStrings);

//  ! You want to “transform” an array into another array of the same length
//  ! You do not want to overwrite an existing array and instead return a new copy

// ! Recap
// ! map creates a new array
// ! map runs a callback on each value and pushes the result
// ! of each callback in the new array
