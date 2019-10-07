'use strict'

export class Ship {
  listOfPirates: (Pirate | Captain)[];
  listOfPoorPirates: Pirate[];

  constructor(listOfPirates: (Pirate | Captain)[] = [], listOfPoorPirates: Pirate[] = []) {
    this.listOfPirates = listOfPirates;
  }

  putPiratesOnShip(name: string, woodenLeg: boolean, captain: boolean = false): (undefined | Pirate) {
    if (this.listOfPirates.length > 0) {
      if (captain){
        for (let pirate of this.listOfPirates)
          if (pirate.captain) {
            console.log(`We already have a Captain ${pirate.name} , don\'t need more...`)
            return undefined;
          }
    }
  }
    let newPirate: Pirate;
    if (captain){
      newPirate = new Captain(name, woodenLeg, captain);

    } else {
      newPirate = new Pirate(name, woodenLeg, captain);
    }
    this.listOfPirates.push(newPirate);
    console.log('new pirate')
    return newPirate;
  }

  getPoorPirates(): string[] {
    for (let pirate of this.listOfPirates)
      if (pirate.gold < 15 && pirate.woodenLeg == true) {
        this.listOfPoorPirates.push();
      } else {
        return
      }
  }

  getGolds(): void {
    let sumGold: number= 0;
    for (let pirate of this.listOfPirates) {
      sumGold = pirate.gold + sumGold;
    }
    console.log(sumGold)

  }

  lastDayOnTheShip(pirate: Pirate): void {
    pirate.party();
  }

  prepareForBattle(pirate: Pirate): void {
    for (let i = 0; i<5; i++){
      pirate.work();
    }
    pirate.lastDayOnTheShip(pirate);
  }
}
'use strict'



export class Pirate extends Ship {
  name: string;
  gold: number;
  healthPoint: number;
  woodenLeg: boolean;
  captain: boolean;

  constructor(name: string, woodenLeg: boolean, captain: boolean, gold: number = 0, healthPoint: number = 10) {
    super();
    this.name = name;
    this.gold = gold;
    this.healthPoint = healthPoint;
    this.woodenLeg = woodenLeg;
    this.captain = captain;
  }

  work(): void {
    this.gold++;
    this.healthPoint--;
  }

  party(): void {
    this.healthPoint++;
  }

  toString() {
    if (this.woodenLeg === true) {
      console.log(`Hello, I\'m Jack. I have a wooden leg and ${this.gold} golds.`);
    } else {
      console.log(`Hello, I\'m Jack. I still have my real legs and ${this.gold}  golds.`);
    }
  }
}

'use strict'

export class Captain extends Pirate {
  constructor(name: string, woodenLeg: boolean, captain: boolean) {
    super(name,woodenLeg,captain);
  }

  work(): void {
    this.gold = this.gold + 10;
    this.healthPoint + this.healthPoint - 5;
  }

  party(): void {
    this.healthPoint = this.healthPoint + 10;
  }
}



let Anchor = new Ship;
let Jack = Anchor.putPiratesOnShip('jack', false, true);
if (typeof Jack != "undefined") {
  Jack.work();
  Jack.party();
  Anchor.prepareForBattle(Jack)
  Jack.toString()
}
Anchor.getGolds()

let Jani = Anchor.putPiratesOnShip('jack', true, false);
if (typeof Jani != "undefined") {
  Jani.work();
  Jani.party();
  Anchor.prepareForBattle(Jani)
  Jani.toString()
}
Anchor.getGolds()