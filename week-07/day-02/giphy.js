/*Giphy API
Display gifs of a cute/funny topic using: https://developers.giphy.com/docs/

Obtain an API key
Search/Find the images in the API
Display the list of the first 16 results's static thumbnail
If the user clicks on the thumbnail, display the animated GIF*/

'use strict';

getGifs();
// setTimeout(getJoke, 4000);

function getGifs() {
    let request = new XMLHttpRequest();
    request.open('GET','https://api.giphy.com/v1/gifs/search',true);

    let loadingElement = document.querySelector('.loader');
    let isLoading = false;

    request.onload = function(){
        // will called when all the content is loaded => readyState = 4
        let gifElement = document.getElementById('gifs');
        let response = JSON.parse(this.response);
        let gifs = response.value.gifs;
        gifElement.innerText = gifs;
        setTimeout(function () {
            loadingElement.classList.add('hide');
        }, 100);

    };

    request.onreadystatechange = function(){
        if (!isLoading) {
            // remove the hide class so the loader will be enabled
            loadingElement.classList.remove('hide');
            isLoading = true;
        }
        console.log(this.readyState);
    };

    request.send();


}