// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict'

let twoDimList: number[][] = [];
console.log(twoDimList)
let matrixsize: number = 4;
for (let i = 0; i < matrixsize; i++) {
  twoDimList[i] = [];
  for (let k = matrixsize - 1; k >= 0; k--){
    if (k == i){
      twoDimList[i].push(1)
    } else {
      twoDimList[i].push(0)
    }
  }
}
for (let entry of twoDimList){
  console.log(entry)
}