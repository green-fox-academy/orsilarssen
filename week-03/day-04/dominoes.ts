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

/*let oneDomino = new Domino(1, 3);
console.log(oneDomino.values)*/

let dominoes = initializeDominoes();

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}


//console.log(dominoes[0].values[0])//

for (let i = 0; i < dominoes.length; i++) {
    for (let k = 0; k < dominoes.length; k++) {
        if (dominoes[i].values[1] == dominoes[k].values[0]) {
            console.log(dominoes[i])
            console.log(dominoes[k])
        }
    }
}



