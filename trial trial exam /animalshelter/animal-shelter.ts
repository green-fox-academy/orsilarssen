'use strict';

import { Animal, Dog, Cat, Parrot } from './animal'

export class AnimalShelter {
  budget: number = 50;
  listOfAnimals: Animal[] = [];
  listOfAdopters: string[] = [];

  //It must have a method named rescue this method takes an Animal as parameter
  //and add the animal to the shelter's list and return the size of the list

  rescue(animal: Animal): number {
    this.listOfAnimals.push(animal);
    return this.listOfAnimals.length;
  }

  //It must have a method named heal this method heals the first not healthy Animal
  //if it is possible by budget, returns the amount of healed animals(0 or 1)

  heal(): number {
    for (let i = 0; i < this.listOfAnimals.length; i++) {
      if (this.listOfAnimals[i].isHealthy == false && this.listOfAnimals[i].healCost <= this.budget) {
        this.listOfAnimals[i].heal();
        this.budget = this.budget - this.listOfAnimals[i].healCost;
        return 1;
      }
    }
    return 0;
  }

  //It must have a method named addAdopter this method takes a name as a parameter
  //and saves it as a potential new owner

  addAdopter(name: string): void {
    this.listOfAdopters.push(name);
  }

  //It must have a method named findNewOwner
  //this method pairs a random name with a random adoptable Animal if it is possible
  //and removes both of them from the lists

  findNewOwner(): void {
    if (this.listOfAnimals.length > 0 && this.listOfAdopters.length > 0) {
      let randomIndexOfAdopters = Math.floor((Math.random() * this.listOfAdopters.length));
      let randomIndexOfAnimals = Math.floor((Math.random() * this.listOfAnimals.length))
      console.log(this.listOfAdopters[randomIndexOfAdopters].concat(this.listOfAnimals[randomIndexOfAnimals].animalName));
      this.listOfAdopters = this.listOfAdopters.splice(randomIndexOfAdopters, 1);
      this.listOfAnimals = this.listOfAnimals.splice(randomIndexOfAnimals, 1);
    }
  }

  //It must have a method named earnDonation this method takes an amount as parameter
  //and increases the shelter's budget by the parameter's value and returns the current budget

  earnDonation(amount: number): number {
    let currentBudget = amount + this.budget;
    return currentBudget
  }

  /*It must have a method named toString that represents the shelter
  and print all the informations about the shelter and the animals in the following format:
  Budget: <budget>€, 
  There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
  <name> is not healthy (<heal cost>€), and not adoptable
  <name> is healthy, and adoptable*/

  toString(): void {
    console.log(`Budget: ${this.budget}€,\n There are ${this.listOfAnimals.length} animal(s) and ${this.listOfAdopters.length} potential adopter(s)`);
    for (let i = 0; i < this.listOfAnimals.length; i++) {
      if (this.listOfAnimals[i].isHealthy == false) {
        console.log(`${this.listOfAnimals[i].animalName} is not healthy (${this.listOfAnimals[i].healCost}€), and not adoptable`)
      } else console.log(`${this.listOfAnimals[i].animalName} is healthy, and adoptable`);
    } 
    console.log(this.listOfAdopters);
    console.log(this.listOfAnimals);
  }
}

let RSPCA = new AnimalShelter;

let buksi = new Dog(false,undefined,'Buksi');
let frici = new Cat(false);
let mia = new Dog(true);
let Tweety = new Parrot(false);
let Chevy = new Dog(true);

RSPCA.rescue(buksi);
RSPCA.rescue(frici);
RSPCA.rescue(mia);
RSPCA.rescue(Chevy);
RSPCA.rescue(Tweety);

RSPCA.heal();
RSPCA.heal();

RSPCA.addAdopter('Orsi');
RSPCA.addAdopter('Viktor');
RSPCA.addAdopter('Johny');
RSPCA.addAdopter('Kris');
RSPCA.addAdopter('Flora');

RSPCA.earnDonation(150);

RSPCA.toString();

