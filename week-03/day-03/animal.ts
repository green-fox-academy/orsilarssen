/*Animal
Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/


'use strict'

class animal {
    private _hungerValue: number;
    private _thirstValue: number;

    constructor(hungervalue: number = 50, thirstValue: number = 50) {
        this._hungerValue = hungervalue;
        this._thirstValue = thirstValue;
    }

    public eat(): void {
        this._hungerValue--;
    }

    public drink(): void {
        this._thirstValue--;
    }

    public play(): void {
        this._hungerValue++;
        this._thirstValue++;
    }
}

let food = new animal();
food.eat();
console.log(food);

let water = new animal();
water.drink();
console.log(water);

let ball = new animal();
ball.play();
console.log(ball);