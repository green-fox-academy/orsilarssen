'use strict'


// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quotee: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let missing: string = 'always takes longer than';

let splitted: string [] = quotee.split(' ');
splitted.splice(3,0,missing)

console.log(splitted.join(' '));

/* var str = "Apples are round, and apples are juicy."; 
var splitted = str.split(" ", 3); 
console.log(splitted)*/