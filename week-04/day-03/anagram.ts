/*Anagram
Write a function, that takes two strings and returns a boolean value based on 
if the two strings are Anagramms or not.
Create a test for that.*/

'use strict'

export class Mia {

  anagram() {

    let word = 'desserts'.split('').sort().join('');
    word.split('').sort().join('');

    let word2 = 'stressed'.split('').sort().join('');

    if (word === word2) {
      return true
    } else {
      console.log('Not an anagram!');
    }
  }
}

let example = new Mia;
example.anagram();
console.log(example.anagram());
