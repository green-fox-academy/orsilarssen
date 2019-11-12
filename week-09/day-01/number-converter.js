'use strict';
let test = require('tape');
// function numConverter (amount) {
//     let numbers = {
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine',
//         10: 'ten',
//         11: 'eleven',
//         12: 'twelve',
//         13: 'thirteen',
//         14: 'fourteen',
//         15: 'fifteen',
//         16: 'sixteen',
//         17: 'seventeen',
//         18: 'eighteen',
//         19: 'nineteen',
//         20: 'twenty',
//         30: 'thirty',
//         40: 'fourty',
//         50: 'fifty',
//         60: 'sixty',
//         70: 'seventy',
//         80: 'eighty',
//         90: 'ninety',
//         100: 'hundred',
//         1000: 'thousand'
//     }
//     let amountArrayReversed = amount.toString().split('').reverse();
//     let reversedEveryTwoDigits
 
//     let resultText = [];
    
//     amountArray.forEach((e, i) => {
//         if (i === 0 && ) {
//             resultText.unshift(numbers[e] + ' ');
//         }
//     });
//     return resultText.join('');
// }
const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens = "twenty thirty fourty fifty sixty seventy eighty ninety".split(" ");
function number2words(n){
    if (n < 20) return num[n];
    let digit = n%10;
    if (n < 100) return tens[~~(n/10)-2] + (digit? " " + num[digit]: "");
    if (n < 1000) return num[~~(n/100)] +" hundred and" + (n%100 == 0? "": " " + number2words(n%100));
    return number2words(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + number2words(n%1000): "");
}
test('firstcase', function(t){
    let actual = number2words(745);
    let expected = 'seven hundred and fourty five';
    t.deepEqual(actual, expected);
    t.end();
  });