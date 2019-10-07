// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

'use strict'

let sumOfNum: number = 56;

function sum2(sumOfNum: number): number {
  let SUMMA: number = 0;
  for (let i = 0; i <= sumOfNum; i++) {
    SUMMA = SUMMA + i;
  }
  return SUMMA
}

console.log(sum2(sumOfNum));

