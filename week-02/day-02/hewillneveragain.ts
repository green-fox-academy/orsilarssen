'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};
notSoCrypticMessage.forEach(function(i){ //a notSoCryptic mindegyik elemén átmegy (forEach) és csinál valamit épp az adott számmal (elem)
  out = out.concat(hashmap[i]); //először fogja az out-ot, ami üres és mellérakja(concat) a hashmap adott elemét (1)
}) //aztán továbbmegy, fogja a 12-es elemet és a már létező out (never gonna van benne) után rakja a 12es számnak megfelelő szöveget a hashmapból

console.log(out)
/*notSoCrypticMessage.forEach(function(elem)){
  out=out.concat(hashmap[elem]);
}

//let out: string = notSoCrypticMessage.toString();

let newString2: string='';

//newString2.replace(hashmap,out );

//hashmap.toString();

console.log(newString2.replace(hashmap,out ));*/