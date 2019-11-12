// server.js
// load the things we need
var express = require('express');
var app = express();
const fetch = require("node-fetch");
// set the view engine to ejs
app.set('view engine', 'ejs');
 
// index page
app.get('/', async function(req, res) {
    let response = await fetch(`http://localhost:3001/todos`);
    let todos = await response.json()  
    res.render('index.ejs', {todo_items: todos});
});
 
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
 
module.exports = app;
 
 