//frontend

let express = require('express');
let app = express();
var fetch = require('node-fetch')

app.use(express.static('static'))

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/main.html');
});

app.listen(8080, function () {
  console.log('Node app is running on port 8080');
});

