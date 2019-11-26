//helper js file

'use strict';

async function get_playlists() {
    let response = await fetch(`http://localhost:3001/playlists`);
    let playlists;
   console.log('helloka');
    try {
        playlists = await response.json()
    }
    catch(err){
        console.log(`Could not JSONIFY response:${response.body} Error:${err}`)
        return
    }
    playlists.forEach(playlist => {list_playlist(playlist)});
  };
   
    function list_playlist(playlist) {
    let playlist_table = document.getElementById('playlists');
    let tablerow = document.createElement('tr');
    let tabledata = document.createElement('td');

    playlist_table.appendChild(tablerow);
    tablerow.appendChild(tabledata);

    tabledata.innerText = playlist.playlist;
};

// async function get_playlists() {
//     let response = await fetch(`http://localhost:3001/playlists`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ playlists:playlists })
//     })
//     json_resp = await response.json()

//     console.log('hola');
  
    // if (json_resp.length == 0) {
    //   res.send('error');
    // } else {
    //   let lists = document.getElementById('lists');
    //   let tablerow = document.createElement('tr');
    //   tablerow.appendChild(lists);
    //   let tabledata = document.createElement('td');
    //   tabledata.appendChild(tablerow);
    //   tabledata.innerHTML = playlists[0];
    // }


//control bar 
let music = document.getElementById('music'); // id for audio element
let duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
let pButton = document.getElementById('pButton'); // play button
let playhead = document.getElementById('playhead'); // playhead
let timeline = document.getElementById('timeline'); // timeline

// timeline width adjusted for playhead
let timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter
pButton.addEventListener("click", play);

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function (event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
};

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
let onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
};
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(event) {
    let newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
};

// timeUpdate
// Synchronizes playhead position with current point in audio
function timeUpdate() {
    let playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (music.currentTime == duration) {
        pButton.className = "";
        pButton.className = "play";
    }
};

//Play and Pause
function play() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton.className = "";
        pButton.className = "pause";
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton.className = "";
        pButton.className = "play";
    }
};

// Gets audio file duration
music.addEventListener("canplaythrough", function () {
    duration = music.duration;
}, false);

// getPosition
// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
};

var audio = document.getElementById("music");

// Countdown
audio.addEventListener("timeupdate", function () {
    var timeleft = document.getElementById('timeleft'),
        duration = parseInt(audio.duration),
        currentTime = parseInt(audio.currentTime),
        timeLeft = duration - currentTime,
        s, m;


    s = timeLeft % 60;
    m = Math.floor(timeLeft / 60) % 60;

    s = s < 10 ? "0" + s : s;
    m = m < 10 ? "0" + m : m;

    timeleft.innerHTML = m + ":" + s;

}, false);

// Countup
audio.addEventListener("timeupdate", function () {
    var timeline = document.getElementById('duration');
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    if (s < 10) {
        timeline.innerHTML = m + ':0' + s;
    }
    else {
        timeline.innerHTML = m + ':' + s;
    }
}, false);

function SetVolume(val) {
    var player = document.getElementById('music');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
};

get_playlists();