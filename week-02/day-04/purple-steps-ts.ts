'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function draw6 (i: number, m: number) {

ctx.fillStyle = 'purple';
ctx.fillRect(i*m,i*m, m,m);
}
 
let m = 10;

for (let i: number = 1; i <= 20; i++) {

    draw6(i, m);
}