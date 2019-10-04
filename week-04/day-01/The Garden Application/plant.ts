'use strict'

import { Garden } from "./garden"

class Plant extends Garden {
    color: string;
    water: number;
    constructor(color: string, water: number = 0) {
        super();
        this.water = water;
        this.color = color;
    }
    needsWater(plant: Flower | Tree): boolean {
        //If the plant has less water then required, return true, else return false
        if (plant.water < plant.requiredWater) {
            return true;
        }
        else{
            return false;
        }
    }
}