'use strict'

let animals: string[] = ["koal", "pand", "zebr"];

animals.forEach(function (animal: string, index: number) {
    animals[index] = animal + 'a';
});

console.log(animals);


// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end