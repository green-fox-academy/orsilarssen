'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

console.log(86400 - (currentHours * 60 **2) + (currentMinutes * 60) + currentSeconds);


// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables