'use strict';



  let numberXY: number = 5;
  let sum: number = 0;
 
  for(let i:number = 1; i <= numberXY; i++) {
     sum = sum + i;
  }
 
  console.log('Sum: ' + sum + ', Average: ' + sum/numberXY);

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3