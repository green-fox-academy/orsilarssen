/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

'use strict'

class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
}

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();

let prevDomi = dominoes[0];
let newArray = [];
while (dominoes.length > 0) {
    for (let i = 0; i < dominoes.length; i++) {
        let current_domi = dominoes[i];
        console.log('comparing:' + prevDomi.values + ' ' + dominoes[i].values);
        if (prevDomi.values[1] == current_domi.values[0]) {
            console.log('MATCH' + dominoes[i].values);
            dominoes.splice(i, 1);
            prevDomi = current_domi;
            newArray.push(current_domi);
        }
    }
}

print(newArray);

