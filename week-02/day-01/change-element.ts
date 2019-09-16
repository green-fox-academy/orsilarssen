'use strict'

let numList: number[] = [1, 2, 3, 8, 5, 6];
numList.map(function (a, i) {
    if (a == 8) {
        numList[i] = 4;
    }
})
console.log(numList);
