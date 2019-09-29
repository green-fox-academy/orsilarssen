/*Petrol Station
Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100 */

class Station {
    gasAmount: number;

    constructor(gasAmount: number = 200) {
        this.gasAmount = gasAmount;
    }

    refill(Car): void {
        let requiredFuel = Car.fuelMissing();
        Car.setGas = requiredFuel;
        this.removeFuel = requiredFuel;
    }

    get stationGas(): number {
        return this.gasAmount;
    }

    set removeFuel(refilledGas: number) {
        this.gasAmount = this.gasAmount - refilledGas;
    }

}

class Car {
    gasAmount: number;
    private _capacity: number;

    constructor(_capacity: number = 100, gasAmount: number = 40) {
        this._capacity = _capacity;
        this.gasAmount = gasAmount;
    }

    fuelMissing(): number {
        return this._capacity - this.gasAmount;
    }

    get getGasAmount(): number {
        return this.gasAmount;
    }
    set setGas(fuelMissing: number) {
        this.gasAmount = this.gasAmount + fuelMissing;
    }
}

let BMW = new Car
let furediShell = new Station

console.log(`BMW GAS levels before refuel: ${BMW.getGasAmount} Station Gas Levels before refuel:${furediShell.gasAmount}`)

furediShell.refill(BMW); 

console.log(`BMW GAS levels after refuel: ${BMW.getGasAmount} Station Gas Levels after refuel:${furediShell.gasAmount}`)
