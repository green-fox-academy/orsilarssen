'use strict';

    var password = document.getElementById("password");

    password.addEventListener("input", function (event) {
      if (password.validity.typeMismatch) {
        password.setCustomValidity("Please provide the correct password!");
      } else {
        password.setCustomValidity("Thanks!");
      }
    }); 