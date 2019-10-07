//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

'use strict'

function bubble(toSort: number[]){
  let temp: number;
  for (let i=0; i< toSort.length - 1; i++){
    for (let j=0; j<toSort.length-i-1; j++){
      if (toSort[j]>toSort[j+1]){
        temp=toSort[j];
        toSort[j]=toSort[j+1];
        toSort[j+1]=temp;
      }
    }
  }
  return toSort
}
//  Example:
console.log(bubble([34, 12, 24, 9, 5]));



function advancedBubble(toSort: number[]){
  let temp: number;
  for (let i=toSort.length - 1; i<= 0; i++){
    for (let j=toSort.length-i-1; j<=0; j++){
      if (toSort[j]<toSort[j+1]){
        temp=toSort[j];
        toSort[j]=toSort[j+1];
        toSort[j+1]=temp;
      }
    }
  }
  return toSort
}
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5]));
//  should print [34, 24, 12, 9, 5]

