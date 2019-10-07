//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

'use strict'

function unique(arr: number[]) {
  let unique_arr: number[] = [];
  for (let num of arr) {
    if (unique_arr.indexOf(num) == -1) {
      unique_arr.push(num)
    }
  }
  return unique_arr
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

