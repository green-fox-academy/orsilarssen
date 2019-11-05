'use strict';

/*List introduction 1
We are going to play with lists. Feel free to use the built-in methods where possible.

Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements*/

let nameList: string[]=[];

console.log(nameList.length);

(nameList.push('William','John','Amanda'));

console.log(nameList[0],nameList[1],nameList[2]);

for (let i=0; i<nameList.length;i++){
  console.log((i+1) + '. ' + nameList[i]);
}

console.log(nameList.splice(1,1));

console.log(nameList);

let newList = nameList.reverse();

console.log(newList);

console.log(nameList[0],nameList[1]);

console.log(newList.splice(0,2));

console.log(nameList[0],nameList[1]);
