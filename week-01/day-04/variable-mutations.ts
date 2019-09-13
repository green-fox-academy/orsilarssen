'use strict';

export{}

let a: number = 3;
a = a + 10
console.log(a);

// make it bigger by 10


let b: number = 100;
b = b - 7
console.log(b);

// make it smaller by 7


let c: number = 44;
c *= 2
console.log(c);

// double c's value



let d: number = 125;
d /= 5
console.log(d);

// divide d's value by 5



let e: number = 8;
e = 8 * 8 * 8
console.log(e);

// what's the cube of e's value?

let f1: number = 123;
let f2: number = 345;


console.log(f1 > f2);

// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;

console.log(g2 *2> g1);

// tell if the double of g2 is bigger than g1 (pras a boolean)


let h: number = 1357988018575474;
let leftOver: number = h % 11;

console.log(leftOver == 0);

// tell if 11 is a divisor of h (as a boolean)


let i1: number = 10;
let i2: number = 3;

console.log(i1 > i2 **2 && i1 < i2 **3);


// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)



let j: number = 1521;
console.log(j %= 0 || 1 || 2 || 3 || 4);


// tell if j is divisible by 3 or 5 (as a boolean)
