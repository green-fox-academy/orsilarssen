/*Prime squares
Example HTML can be found here

1. generate 100 divs to the <section> element and add index numbers to it as the element's textContent
2. Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
3. Create a timer that keeps calling the prime validator function until it reaches the last element
   the timer should fire every 100ms
   the timer should stop when there are no more elements left to be colored*/

'use strict';

//1

for (let x = 0; x < 100; x++) {
  var board = document.createElement('div');
  board.className = "blah";
  document.getElementById('board').appendChild(board);
}
/*var container = document.createElement("div");
for (var i = 0; i < 100; i++) {
    container.innerHTML += '<div class=" "></div>';
}*/

//2
/*
let primeOrNot = () => {
let boxes = document.getElementsByClassName("box");{ //get elements by class
  let counter = boxes[0].getElementsByTagName("p")[0].innerText
  counter ++;
  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  boxes[1].innerHTML = "<p>`counter++`</p>";


boxes[0].getElementsByTagName("p")[0].innerText = "hello6"; //get elements by tag name
boxes[1].innerHTML = "<p>hello2</p>";
}


/*let newElement = () => {
  for (let i=0; i>100; i++){
  document.createElement("div");
  }
  console.log(newElement);
}

newElement.setAttribute("class", "purple");
document.querySelector(".yellow").append(newElement);


let first = document.getElementById("first"); //get element by ID
console.log(first);

let purples = document.getElementsByClassName("purple"); //get elements by class
console.log(purples);

purples[0].getElementsByTagName("p")[0].innerText = "hello6"; //get elements by tag name
purples[1].innerHTML = "<p>hello2</p>";

console.log(document.querySelectorAll(".yellow > div:nth-child(odd)")); //get elements by css selector*/

