/*Prime squares
Example HTML can be found here

1. generate 100 divs to the <section> element and add index numbers to it as the element's textContent
2. Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
3. Create a timer that keeps calling the prime validator function until it reaches the last element
   the timer should fire every 100ms
   the timer should stop when there are no more elements left to be colored*/

'use strict';

var element = document.getElementById('section')

for (let x = 1; x <= 100; x++) {
  const isPrime = num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  if (isPrime(x)) {
    element.innerHTML += (`<div class="prime"> ${x} </div>`)
  } else {
    element.innerHTML += (`<div class="not-prime"> ${x} </div>`)
  }
}