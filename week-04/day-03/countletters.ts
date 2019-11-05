'use strict';

/*Count Letters
Write a function, that takes a string as an argument and returns a dictionary with all letters in the string 
as keys, and numbers as values that shows how many occurrences there are.
Create a test for that.*/

export function letterCount(string: string): any {
  let dictionary: any = {};

  string.toLocaleLowerCase().replace(/\s/g, '').split('').sort().forEach(function (letter) {
    if (!dictionary[letter]) { dictionary[letter] = 0; }
    dictionary[letter]++;
  });

  return dictionary;
}

console.log(letterCount('hello loser, you suck balls...go back to bed'));

/*let letter_map2 = new Map();


function countLetters(keys2: string [] = []) {
  //let keys2: string [] = [];
  for (let letter of splitStuff) {
    for (let key of letter_map.keys()) {
      keys.push(keys2);
    }
    if (keys2.some(x => x === letter)) {
      let cur_letter = letter_map.get(letter)
      cur_letter++
      letter_map.set(letter, cur_letter)
    }
    else {
      letter_map.set(letter, 1)
    }
  }

  for (let entry of letter_map.entries()) {
    console.log(entry[0], entry[1])
  }

}


countLetters(['hello loser, how are you today?']);*/

