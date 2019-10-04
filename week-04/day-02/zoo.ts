'use strict'

abstract class Animal {
  name: string;
  age: number;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  public abstract breed(): string;

}

class Reptile extends Animal {
  constructor(name: string) {
    super(name);
  }

  breed():string {
    return 'laying eggs.';
  }
}

class Mammal extends Animal {
  constructor(name: string) {
    super(name);
  }

  breed():string {
    return 'pushing miniature verions out.';
  }
}

export class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }

  breed():string {
    return 'laying eggs.';
  }
}

let reptile = new Reptile('Crocodile');
let mammal = new Mammal('Koala');
let bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);





