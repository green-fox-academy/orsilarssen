'use strict'


function isSymmetric(_fullSizeMatrix: number[][]) {
  let symm: boolean = true;
  for (let i = 0; i < _fullSizeMatrix.length; i++) {
    for (let j = 0; j < _fullSizeMatrix.length; j++) {
      if (_fullSizeMatrix[i][j] != _fullSizeMatrix[j][i]) {
        symm= false;
        break;
      }
    }
  }
  return symm;
}

console.log(isSymmetric([[7, 7, 7],[6, 5, 7],[1, 2, 1]]));

