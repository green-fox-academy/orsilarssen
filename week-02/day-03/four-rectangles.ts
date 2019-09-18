'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.



ctx.fillStyle = 'green';
ctx.fillRect(canvas.width/2-20,canvas.height/2-20, 300, 300)


ctx.fillStyle = 'pink';
ctx.fillRect(canvas.width/2-80,canvas.height/4-100, 50, 50)


ctx.fillStyle = 'magenta';
ctx.fillRect(canvas.width/2-5,canvas.height/2-5, 50, 50)


ctx.fillStyle = 'blue';
ctx.fillRect(canvas.width/3-100,canvas.height/4-40, 100, 100)  