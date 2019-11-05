'use strict';

/*Map introduction 1
We are going to play with maps. Feel free to use the built-in methods where possible.
Create an empty map where the keys are integers and the values are characters
Print out whether the map is empty or not
Add the following key-value pairs to the map
Key	Value
97	a
98	b
99	c
65	A
66	B
67	C
Print all the keys
Print all the values
Add value D with the key 68
Print how many key-value pairs are in the map
Print the value that is associated with key 99
Remove the key-value pair where with key 97
Print whether there is an associated value with key 100 or not
Remove all the key-value pairs*/

interface map {
  key: number;
  value: string;
}

/*let map1 = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C',
  68: 'D',
};*/

let map = {}

console.log(Object.keys(map).length <= 0); //Print out whether the map is empty or not

map[97] = 'a';
map[98] = 'b';
map[99] = 'c';
map[65] = 'A';
map[66] = 'B';
map[67] = 'C';
map[68] = 'D';

console.log(Object.keys(map)); //Print all the keys


let values: string[] = Object.keys(map).map(e => map[e]); //Print all the values
console.log(values);

//Add value D with the key 68

console.log(Object.keys(map).length); //Print how many key-value pairs are in the map  

console.log(map['99']);   //Print the value that is associated with key 99

//console.log(Object.keys(map1['97'])) //Remove the key-value pair where with key 97

console.log(Object.hasOwnProperty(map['100']));

delete map['97']; //Remove the key-value pair where with key 97

map={

};





