/*Farm
Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal*/

class Animal {
    hungerValue: number;
    thirstValue: number;
    name: string;

    constructor(name: string, hungervalue: number = 50, thirstValue: number = 50) {
        this.hungerValue = hungervalue;
        this.thirstValue = thirstValue;
        this.name = name;
    }

    eat(): void {
        this.hungerValue--;
    }

    drink(): void {
        this.thirstValue--;
    }

    play(): void {
        this.hungerValue++;
        this.thirstValue++;
    }
}

class Farm {
    listofAnimals: Animal[];
    numberOfSlots: number = 0;
    maximumSlots: number = 6;
    constructor(listofAnmials: Animal[] = []) {
        this.listofAnimals = listofAnmials;
    }
    breed(name: string, hungerValue: number = 50): void {
        if (this.numberOfSlots >= this.maximumSlots) {
            console.log(`We cannot breed ${name}. FARM is full!`)
            return
        }
        let newBreed: Animal = new Animal(name, hungerValue);
        this.listofAnimals.push(newBreed);
        this.numberOfSlots++;
    }

    slaughter(): void {
        if (this.numberOfSlots == 0){
            console.log('NO animals to slaugther. We NEED TO BREED!')
            return
        }
        let hungriest_animal: string;
        let hungriest_animal_num: number;
        let hungriest = 10;
        for (let i = 0; i < this.listofAnimals.length; i++) {
            if (hungriest > this.listofAnimals[i].hungerValue) {
                hungriest = this.listofAnimals[i].hungerValue;
                hungriest_animal = this.listofAnimals[i].name;
                hungriest_animal_num = i;                
            }
        }
        console.log(`We need to slaugther ${hungriest_animal}!`);
        this.listofAnimals.splice(hungriest_animal_num,1);

    }
}

let BESTFARM = new Farm;

/*BESTFARM.breed('Bundi', 25);
BESTFARM.breed('Dundi', 13);
BESTFARM.breed('Donci', 46);
BESTFARM.breed('I. Frici', 1);
BESTFARM.breed('II. Frici', 2);
BESTFARM.breed('III. Frici', 3);
BESTFARM.breed('IV. Frici', 3);*/

BESTFARM.slaughter();