'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

function subint(baseNum: number, arrayToSearch: number []){
  let stringbaseNum:string = baseNum.toString();
  let newArray : number[] = [];
  for (let num of arrayToSearch){
    if (num.toString().indexOf(stringbaseNum) >= 0){
      newArray.push(arrayToSearch.indexOf(num))
    }
  }
  return newArray
}
// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 91, 34, 59, 61]));
// should print: '[]'