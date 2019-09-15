'use strict';

for (let j: number = 1; j < 101; j++) 

{  if (j% 3 ==0 && j % 5 ==0) {console.log('FizzBuzz');}

   else if (j % 3 == 0) {console.log('Fizz');} 

   else if (j % 5 ==0) {console.log('Buzz');}

   else {console.log(j);}

}
