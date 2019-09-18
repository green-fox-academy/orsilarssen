'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.


ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(450, 150);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(450, 150);
ctx.lineTo(450, 300);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(450, 300);
ctx.lineTo(100, 300);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(100, 150);
ctx.stroke();
