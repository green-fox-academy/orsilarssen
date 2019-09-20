'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]


function draw7(i: number, m: number) {

    ctx.fillStyle = 'purple';
    ctx.fillRect(i * m / 2, i * m / 2, m, m);
    ctx.strokeRect(i * m / 2, i * m / 2, m, m);
}

let n = 5;

for (let i: number = 1; i <= 6; i++) {
    n = n + 5;
    draw7(i, m);
}