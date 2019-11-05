'use strict';

/*List introduction 2
Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pomelo to List B in a single statement
Print out the 3rd element from List A*/

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

let ListB = ListA;

console.log(ListA.indexOf('Durian') > 0); //Print out whether List A contains Durian or not

ListB.splice(3, 1); console.log(ListB); //Remove Durian from List B

//ListA.push('Kiwifruit'), console.log(ListA); //Add Kiwifruit to List A after the 4th element

ListA.splice(3, 0, 'Kiwifruit'); console.log(ListA);

//Compare the size of List A and List B

if (ListA.length > ListB.length) {
  console.log('ListA has more elements')
} else if (ListA.length == ListB.length) {
  console.log('they have equal elements');
} else console.log('B list has more');

//Get the index of Avocado from List A

console.log(ListA.indexOf('Avocado',0));

console.log(ListB.indexOf('Durian',0));//Get the index of Durian from List B

ListB.push('Passionfruit' , 'Pomelo'); console.log(ListB); //Add Passion Fruit and Pomelo to List B in a single statement

console.log(ListA[2]); //Print out the 3rd element from List A*
