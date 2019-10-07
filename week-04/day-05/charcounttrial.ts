'use strict'

const fs = require('fs');

let readStuff: string = fs.readFileSync('countchar.txt', 'utf8');

let splitStuff = readStuff.split('').sort();

let letter_map = new Map();
let keys=[]
for (let letter of splitStuff){
  for (let key of letter_map.keys()){
    keys.push(key);
  }
  if (keys.some(x => x === letter)){
      let cur_letter = letter_map.get(letter)
      cur_letter++
      letter_map.set(letter,cur_letter)
    }
  else{
      letter_map.set(letter,1)
    }
  }

for (let entry of letter_map.entries()){
  console.log(entry[0],entry[1])
}
  