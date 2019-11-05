'use strict'

let button = document.querySelector('button');

let liCounter = document.querySelectorAll('li').length;

let result = document.getElementsByClassName('result')[0];

button.addEventListener('click', function () {
  result.innerHTML = (liCounter);
});