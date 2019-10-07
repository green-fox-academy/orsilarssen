// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict'

let numList2: number[] = [3, 4, 5, 6, 7];
let x: number = numList2.length;
let newNumList: number[] = [];


for (let i = 0; i < x; i++) {
  newNumList.push(numList2.pop());
}
console.log(newNumList);