'use strict';

// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

const mapWith = (array, callback) => {
  let output = [];
  array.forEach(element => {
    output.push(callback(element)) //végigmegy a beírt array elementjein és a callback 
    //function (addOne) végigcisnálja az egyes elementeken majd visszapusholja az output üres arraybe
  });
  return output;
}

const addOne = (number) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne));

//expected result: [2, 3, 4]


// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (words) => {
  return words[i].slice(0, words[i].length-2)
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']

/*var str = 'Hello World',
    i = 3,
    result = str.substr(0, i-1)+str.substring(i);*/