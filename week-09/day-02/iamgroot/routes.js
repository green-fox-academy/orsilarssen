const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/groot', (req, res) => { //localhost:3000/groot?message=
  let message = req.query.message;
  //let answer = messageDb;
  if (message) {
    res.status(200);
    res.json({
      "received": message,
      "translated": "I am Groot!"
    });
  } else {
    res.status(404);
    res.json({"error": "I am Groot!"})
  };
});

module.exports = app;