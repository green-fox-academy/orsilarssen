// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict'

let z: number = 7;

function factorio(z: number): number {
  let fact:number =1;
  for (let i = 1; i <= z; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorio(z));





