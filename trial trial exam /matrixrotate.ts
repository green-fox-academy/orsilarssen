'use strict';

/*Matrix rotate
Create a function named rotateMatrix that takes an n×n integer matrix (array of arrays) as 
parameter and returns a matrix which elements are rotated 90 degrees clockwise.
Example
Input
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Output

[ [ 7, 4, 1 ],
  [ 8, 5, 2 ],
  [ 9, 6, 3 ] 
]*/

function rotateMatrix(matrix: number[][]): number[][] {
  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = i; j < matrix.length - i - 1; j++) {
      let x: number = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - 1 - j][i];
      matrix[matrix.length - 1 - j][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
      matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i];
      matrix[j][matrix.length - 1 - i] = x;
    }
  } 
  return matrix
}

let rotatedMatrix=rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

for(let i=0; i<rotatedMatrix.length;i++){
  console.log(rotatedMatrix[i]);
}