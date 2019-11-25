//express server

let express = require('express');
let app = express();
var fetch = require('node-fetch')

app.use(express.static('static'))

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '/index.html');
});

app.get('/a/:alias', async function (req, res){
  let alias = req.params.alias;
  console.log(alias)
  let response = await fetch(`http://localhost:3001/api/getalias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ alias: alias })
  })
  json_resp = await response.json()

  if ("kocsog" in json_resp) {
    res.send('error')
  } else {
    res.redirect(`https://${json_resp.url}`)
  }
});

app.get('/api/links', async function (req,res){
  let response = await fetch(`http://localhost:3001/api/all`)
  json_resp = await response.json()
  res.send(json_resp)
});

app.listen(8080, function () {
  console.log('Node app is running on port 8080');
});

