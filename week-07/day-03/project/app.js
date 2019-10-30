const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/doubling', (req, res) => {
  let result = {}; 

  console.log("query param: " + req.query.input);

  if (req.query.input == undefined) {
    result = { "error": "Please provide an input!" };
  } else {
    result = {
      "received": req.query.input,
      "result": 2*req.query.input,
    }
  }

  res.status(200);
  res.setHeader("Content-type", "application/json");
  res.send(result);
});

app.get('/greeter', (req, res) => {
  let greeting = {}; 

  //console.log("query param: " + req.query.error);
  console.log(req.query);

  if (req.query.name == undefined && req.query.title == undefined) {
    greeting = {
      "error": "Please provide a name and a title!"
    }
  } else if (req.query.title == undefined) {
    greeting = {
      "error": "Please provide a title!"
    }
  } else if (req.query.name == undefined) {
    greeting = {
      "error": "Please provide a name!"
    }
  } else {
    greeting = {
      "welcome_message": "Oh, hi there petike, my dear student!"
    }
  }

  res.status(200);
  res.setHeader("Content-type", "application/json");
  res.send(greeting);
});

app.get('/appenda/:xx', (req, res) => {
  let append = {}; 

  console.log("xx:" + req.params.xx);

  //console.log("query param: " + req.query.error);
  console.log(req.query);

  if (req.query == undefined) {
    res.status(404);
  } else {
    append = {
      "appended": req.params.xx +'a'
    }
  }

  res.status(200);
  res.setHeader("Content-type", "application/json");
  res.send(append);
});


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});