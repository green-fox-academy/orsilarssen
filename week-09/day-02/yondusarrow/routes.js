/*Yondu's Arrow
Create a GET /yondu endpoint
That receives a query parameter: "distance=100.0&time=10.0"
(Speed = Distance / Time)
And responds with the calculated speed of the arrow:
{
  "distance": 100.0,
  "time": 10.0,
  "speed": 10.0
}
Try time with zero! Look what happens!
Write a test where you check:
With giving a parameter the status is ok,
and the given response is the same as expected
That without giving a parameter the status is not ok,
and the given error response is the same as expected*/

'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/yondu', (req, res) => { //localhost:3000/yondu?distance=100.0&time=10.0
  let distance = req.query.distance;
  let time = req.query.time;
  let speed = distance / time;

  if (distance && time){
    res.status(200)
    res.json({
        distance: parseInt(distance),
        time: parseInt(time),
        speed: speed
      });
  } else if (distance) {
    res.status(404);
    res.json({"error": "Missing time"})
  } else if (time) {
    res.status(404);
    res.json({"error": "Missing distance"})
  } else if (distance && time == null) {
    res.status(404);
    res.json({"error": "Time can't be 0!"})
  } else {
    res.status(404);
    res.json({"error": "Please provide distance and time!"})
  };
});

module.exports = app;