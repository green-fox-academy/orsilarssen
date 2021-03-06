/*Sharpie
Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects which decreases inkAmount*/

'use strict'

class sharpie {
    private _color: string;
    private _width: number;
    private _inkAmount: number = 100;

    constructor(color: string, width: number) {
        this._color = color;
        this._width = width;
    }

    public use(): void {
        this._inkAmount--;
    }
}

let pens = new sharpie('red', 0.56);
pens.use();
console.log(pens)