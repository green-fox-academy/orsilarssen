'use strict'

import { Bird } from "./zoo"

interface Flyable{
  land():void;

  fly?():void;
  
  takeOff?():void;
}

abstract class Vehicle{
  name: string;
  type: string;
  color: string;
}


class Helicopter extends Vehicle implements Flyable{
  public land(): void{
    console.log('Please fasten your seatbelts.');
  }
}

class Bird2 implements Flyable{
  public land(): void{
    console.log('Have a safe landing, Birdie!');
  }
}