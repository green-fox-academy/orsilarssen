/*## Task

Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300ms, using setTimeout.

Then, print the contents of the promise after it has been fulfilled by passing
console.log to then.

## Boilerplate*/

'use strict';

require('es6-promise');

console.log('h0');

let promise = new Promise(function (fulfill, reject) {
  console.log('hi')
  setTimeout(() => {
    console.log('h2')
    fulfill('FULFILLED!')
  }, 10);

})
console.log('meow');
promise.then(console.log);
console.log('yes');

