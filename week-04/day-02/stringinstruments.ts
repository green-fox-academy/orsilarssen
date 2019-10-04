'use strict'

abstract class Instrument {
    protected instrumentName: string;

    constructor(instrumentName: string) {
        this.instrumentName = instrumentName;
    }

    abstract play(): void;
}

abstract class StringedInstruments extends Instrument {
    numberOfStrings: number;

    constructor(instrumentName: string, numberOfStrings: number) {
        super(instrumentName);
        this.numberOfStrings = numberOfStrings;
    }

    abstract sound(): void;

    play() {
        this.sound();
    }
}

class ElectricGuitar extends StringedInstruments {
    constructor(numberOfStrings: number = 6) {
        super('Electric Guitar', numberOfStrings);
    }

    sound(){
        return 'Twang'
    }
    play() {
        console.log(`${this.instrumentName} , a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}

class Violin extends StringedInstruments {
    constructor(numberOfStrings: number = 4) {
        super('Violin', numberOfStrings);
    }

    sound(){
        return 'Screech'
    }
    play() {
        console.log(`${this.instrumentName} , a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}

class BassGuitar extends StringedInstruments {
    constructor(numberOfStrings: number = 4) {
        super('Bass Guitar', numberOfStrings);
    }

    sound(){
        return 'Duum-duum-duum'
    }
    play() {
        console.log(`${this.instrumentName} , a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
    }
}


//The Workshop should be invoked from another file like app.ts or main.ts


let guitar = new ElectricGuitar(6);
let bassGuitar = new BassGuitar(4);
let violin = new Violin(4);

guitar.play();
bassGuitar.play();
violin.play();

let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();

//We expect the following output:

/*Test 1 Play

Electric Guitar, a 6-stringed instrument that goes Twang
Bass Guitar, a 4-stringed instrument that goes Duum-duum-duum
Violin, a 4-stringed instrument that goes Screech

Test 2, create Electric, Bass Guitar with 7 and 5 strings.

Test 2 Play
Electric Guitar, a 7-stringed instrument that goes Twangg
Bass Guitar, a 5-stringed instrument that goes Duum-duum-duum*/