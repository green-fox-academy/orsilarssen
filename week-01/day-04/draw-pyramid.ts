'use strict';


let lineCount: number = 4
let stars: string = '*'

for (let l: number = 0; l < lineCount; l++) {
      if (l % 2 == 1) {console.log(' ' + '*' + ' ');}
      l = l++;

}

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is