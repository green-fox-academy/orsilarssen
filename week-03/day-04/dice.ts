class DiceSet {
    dice: number[];
    readonly numOfDices: number = 6;

    roll(): number[] {
        this.dice = [];
        for (let i = 0; i < this.numOfDices; i++) {
            this.dice.push(Math.floor(Math.random() * 6 + 1));
        }
        return this.dice;
    }

    reroll(index?: number): void {
        if (index === undefined) {
            for (let i = 0; i < this.numOfDices; i++) {
                this.dice[i] = Math.floor(Math.random() * 6 + 1);
            }
        } else {
            this.dice[index] = Math.floor(Math.random() * 6 + 1);
        }
    }

    getCurrent(index?: number): number[] | number {
        if (index === undefined) {
            for (let i = 0; i < this.numOfDices; i++) {
                return this.dice;
            }
        } else {
            return this.dice[index];
        }
    }

    is6(index?: number): boolean {
        return this.dice[index] ==6;  
    }
}



// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

let diceSet = new DiceSet();

diceSet.roll();

for (let i = 0; i < diceSet.numOfDices; i++) {
    while (diceSet.is6(i)===false) {
        diceSet.reroll(i)
    }
    console.log(diceSet.getCurrent(i))
}






