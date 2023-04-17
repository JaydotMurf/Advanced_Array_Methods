//  ! Creates a new array
//  ! Loops through an array
//  ! Runs a callback function on each value in the array
//  ! If the callback function returns true, that value is pushed to the new array
//  ! If the callback function returns false, that value will not be included in the new array
//  ! the result of the callback will always be evaluated into a boolean

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

const females = people.map((person) => {
  if (person.sex !== 'female') return;

  return person.name;
});

const femaleNames = females.filter((person) => {
  return person !== undefined;
});

console.log(femaleNames);

const colors = ['green', 'purple', 'red', 'black'];

function myfilter(arr, callback) {
  const filteredArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (callback(arr[index], index, arr)) {
      filteredArr.push(arr[index]);
    }
    return filteredArr;
  }
}

const wordsWithE = myfilter(colors, function (word) {
  return word.length <= 5;
});

console.log(wordsWithE);

//  ! You want to “transform” an array into another array of the same length or smaller length depending on a condition
//  ! You want to see how many elements in an array satisfy a certain condition
//  ! You do not want to modify the existing array you are filtering

//  ! filter creates a new array
//  ! filter runs a callback on each value
//  ! if the result of the callback returns true, that value is added to the new array
