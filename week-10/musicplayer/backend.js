//backend
//communicates w SQL - express server

//make: .gitignore - put: express .env node_modules
/*npm modules:
body-parser
cors
mysql
dotenv

npm install body-parser cors mysql dotenv --save
 
-----------------
database
-----------------
sign-in to mysql:

// mysql -u orsilarssen -p
(password: yourpassword)

CREATE DATABASE `music`;

USE music;

CREATE TABLE `playlists` (
	`id` INT(200) NOT NULL AUTO_INCREMENT,
	`playlist` TINYTEXT,
	`system` TINYTEXT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tracks` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`path` TINYTEXT,
	`playlist_id` INT,
	PRIMARY KEY (`id`)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';

*/

'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

try {
  conn.connect();
} catch (err) {
  console.log(`Error with database connection ${err}`);
};

app.get('/playlists', function(req, res) {
  var sql = "SELECT * FROM playlists";
  conn.query(sql, function(err, posts) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' });
    } else {
      res.json(playlists);
    }
  })
});

// set port
app.listen(3001, function () {
  console.log('Node app is running on port 3001');
});

