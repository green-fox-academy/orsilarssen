'use strict';

/*Swear words
Write a method which can read and parse a file containing not so family friendly text. 
The method must remove all the given words from the file and return the amount of the removed words.

Input

['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']
Output

17*/

//declare function require(path: string): any;

const fs = require('fs');

let badFile: string = '';

try {
  badFile = fs.readFileSync('swearwords.txt', 'utf8');
} catch{
  console.log('file doesn\'t exist');
  //process.exit();
}

let badWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt']

let words = badFile.split(' ');

let numberOfwords = words.length;

let cleanWords = words.filter(function (word):boolean {
  return (badWords.some(function (e):boolean {
    return e == word
})

let numberOfBad = numberOfwords - cleanWords.length;

let cleanFile = cleanWords.join('');

console.log(numberOfBad);

/*try {
  fs.writeFileSync('Clean File.txt', cleanFile, 'utf8');
} catch{
  console.log('file can not be written');
}*/
