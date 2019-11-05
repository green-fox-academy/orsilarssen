'use strict';

export abstract class Animal {
  ownerName: string;
  isHealthy: boolean;
  healCost: number;
  animalName: string;

  constructor(ownerName?: string, isHealthy?: boolean, healCost?: number, animalName?: string) {
    this.ownerName = ownerName;
    this.isHealthy = isHealthy;
    this.healCost = healCost;
    this.animalName = animalName;
  }

  //It must have a method named heal(), that sets the isHealthy field's status to true
  heal(): void {
    if (this.isHealthy === false) {
      this.isHealthy = true;
    }
  }

  //It must have a method named isAdoptable that returns a boolean value whether it can be adopted or 
  //not - an animal can be adopted if it is healthy  

  isAdoptable(): boolean {
    if (this.isHealthy == true) {
      return true;
    } else {
      return false;
    }
  }

  /*It must have a method named toString() that represents the Animal in the following format:
  <name> is not healthy (<heal cost>€), and not adoptable
  <name> is healthy, and adoptable
  The animal's name is the same as the class name by default, but it can be set trough constructor as well*/

  toString(): void {
    if (this.isHealthy === false) {
      console.log(`${this.animalName} is not healthy (${this.healCost}€), and not adoptable`);
    } else {
      console.log(`${this.animalName} is healthy, and adoptable`);
    }
  }
}

export class Cat extends Animal {
  ownerName: string;
  isHealthy: boolean;
  healCost: number;

  constructor(isHealthy: boolean, ownerName?: string, animalName: string = 'Cat') {
    let healCost: number = Math.floor((Math.random() * 7));
    super(ownerName, isHealthy, healCost, animalName);
  }
}

export class Dog extends Animal {
  ownerName: string;
  isHealthy: boolean;
  healCost: number;

  constructor(isHealthy: boolean, ownerName?: string, animalName: string = 'Dog') {
    let healCost: number = Math.floor((Math.random() * 8) + 1);
    super(ownerName, isHealthy, healCost, animalName);
  }
}

export class Parrot extends Animal {
  ownerName: string;
  isHealthy: boolean;
  healCost: number;

  constructor(isHealthy: boolean, ownerName?: string, animalName: string = 'Parrot') {
    let healCost: number = Math.floor((Math.random() * 7) + 4);
    super(ownerName, isHealthy, healCost, animalName);
  }
}


