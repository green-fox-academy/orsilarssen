'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

let myTodo: string = 'My todo:\n';

let restOfList: string = ' - Download games\n    - Diablo'

let newString=myTodo.concat(todoText);

console.log(newString.concat(restOfList));


//console.log(myTodo.concat(todoText));