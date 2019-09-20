'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

/*function draw8 (p: number) {

ctx.fillStyle = 'black';
ctx.fillRect(p , p, 40 , 40);
}

let nm = 5;

for (let i: number = 1; i <= 15; i++) {
n = n + 5;
draw8( );
}*/



function draw8(i: number, j: number) {
    ctx.fillRect(i * 50, j * 50, 50, 50);
    ctx.strokeRect(i * 50, j * 50, 50, 50);
    ctx.strokeStyle = 'pink';

}
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (j % 2 == 0) {
            if (i % 2 == 0) {
                ctx.fillStyle = 'white';
            }
            else {
                ctx.fillStyle = 'pink';
            }
        }
        else {
            if (i % 2 == 0) {
                ctx.fillStyle = 'pink';
            }
            else {
                ctx.fillStyle = 'white';
            }
        }
        draw8(i, j);
    }
}