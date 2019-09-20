'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function linePlayQ(x1: number, y1: number, x2: number, y2: number) {

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

};


for (let k: number = 0; k <=14; k++) {
    let step = (canvas.width / 28) * k;
    ctx.strokeStyle = 'purple';

    linePlayQ(canvas.width/2, 0 + step, canvas.width / 2 - step, canvas.height/2);

};

for (let k: number = 0; k <=14; k++) {
    let step = (canvas.width / 28) * k;
    ctx.strokeStyle = 'purple';

    linePlayQ(canvas.width/2, 0 + step, canvas.width / 2 + step, canvas.height/2);

};

for (let k: number = 0; k <=14; k++) {
    let step = (canvas.width / 28) * k;
    ctx.strokeStyle = 'purple';

    linePlayQ(canvas.width-step, canvas.width/2, canvas.width / 2 , canvas.width/2+step);

};


for (let k: number = 0; k <=14; k++) {
    let step = (canvas.width / 28) * k;
    ctx.strokeStyle = 'purple';

    linePlayQ(0+step, canvas.width/2, canvas.width / 2 , canvas.width/2+step);

};



