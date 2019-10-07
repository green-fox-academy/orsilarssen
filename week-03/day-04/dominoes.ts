class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
}

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(7, 1));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
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
        let prev = dominoes[i].values
        console.log(`comparing: ${dominoes[i].values} ${prev}`);
        
        if (prev[1] == dominoes[i].values[0]) {
            console.log(dominoes[i])
        }
}



