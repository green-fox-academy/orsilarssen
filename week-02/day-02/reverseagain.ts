'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(reversed: string) {
  let newRev: string[] = [];
  let reversedLentgh: number = reversed.length;
  let spilttedRev = reversed.split('');
  for (let i = 0; i < reversedLentgh; i++) {
    newRev.push(spilttedRev.pop());
  }
  let newNewString: string = '';
  for (let i = 0; i < newRev.length; i++) {
    newNewString = newNewString.concat(newRev[i]);
  }
  return newNewString;
}
console.log(reverse(reversed));

export = reverse;