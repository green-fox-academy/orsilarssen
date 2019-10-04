
export class Garden {
    tree: string [];
    flower: string [];
    color: string;
    constructor(tree: string[] = [], flower: string[]=[], color: string) {
        this.tree = tree;
        this.flower=flower;
        this.color=color;
    }

    newFlower(color: string): string {
        this.flower.push(this.newFlower('blue'))
    }
    newTree(color: string) {
        this.tree.push(new Tree(color))
    }

    waterPlants(waterAmount: number): void {
        console.log(`Watering with ${waterAmount}`);
        //Find out which plant needs to be watered
        let plantsToWater = [];
        //Go through all of the plants
        for (let plant of this.plants) {
            //Call the needsWater method, it will return true if the plant needs water
            if (plant.needsWater(plant)) {
                //add it to the plantsToWater Array if needs water
                plantsToWater.push(plant);
            }
        }

        for (let plant of plantsToWater) {
            //Set the water amount of the individual plant by forumla: (waterAmount / PlantsToWater) * AbsorbRation of the Plant
            plant.water = (waterAmount / plantsToWater.length) * plant.absorbRatio;
        }

        //If the plant has less water then required, console log doesnt need water/need water
        for (let plant of this.plants) {
            if (plant.water > plant.requiredWater) {
                console.log(`The ${plant.color} ${plant.constructor.name} doesnt need water`);
            } else {
                console.log(`The ${plant.color} ${plant.constructor.name} needs water`);
            }
        }
    }
}