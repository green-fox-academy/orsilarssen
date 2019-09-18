'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


function draw4(size: number) {

    ctx.strokeRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
};

for (let i = 0; i < 4; i++) {
    let r = i * 100

    draw4(r);
}
