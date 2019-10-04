/*'use strict'

class Garden {
    protected plantType: string;
    protected colour: string;
    protected waterLevel: number;


    constructor(plantType: string, colour: string, waterLevel: number) {
        this.plantType = plantType;
        this.colour = colour;
        this.waterLevel = waterLevel;
    }

    waterFirst(): void {
        console.log(`The ${this.colour} Flower needs water`);
        return
    }

    waterSecond(): void {

    }

    waterThird(): void {

    }
}

class Flower extends Garden {
    constructor(plantType: string = 'flower', colour: string, waterLevel: number = 0) {
        super(plantType, colour, waterLevel);
    }


}

class Tree extends Garden {
    constructor(plantType: string = 'tree', colour: string, waterLevel: number = 0) {
        super(plantType, colour, waterLevel);
    }
} */