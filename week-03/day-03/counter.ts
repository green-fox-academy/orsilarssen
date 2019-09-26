/*Counter
Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/

'use strict'

class Counter {
    private _integer: number;

    constructor(integer: number = 0) {
        this._integer = integer;
    }

    public increase(): void {
        this._integer++;
    }

    public decrease(): void {
        this._integer--;
    }

    public current(): void{
        this._integer;
    }
}

let useCurr = new Counter(166);
useCurr.current();
console.log(useCurr)

let useInc=new Counter(256);
useInc.increase();
console.log(useInc)

let useDec=new Counter(324)
useDec.decrease();
console.log(useDec)
