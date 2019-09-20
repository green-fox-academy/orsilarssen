'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function linePlay(x1: number, y1: number, x2: number, y2: number) {


    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

};



for (let k: number = 0; k <= 14; k++) {
    let x = k * 400 / (14 - 1);
    let y = k * 400 / (14 - 1);
    ctx.strokeStyle = 'purple';

    linePlay(0, y, x, 400);

};

for (let k: number = 0; k <= 14; k++) {
    let x = k * 400 / (14 - 1);
    let y = k * 400 / (14 - 1);
    ctx.strokeStyle = 'green';

    linePlay(400, y, x, 0);

};

for (let q: number=1; q <= 4; q++); {

    linePlay(0/q, y/q, x/q, 400/q);

};