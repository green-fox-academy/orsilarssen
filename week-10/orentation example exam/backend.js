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

CREATE DATABASE `links`;

USE links;

CREATE TABLE `links_table` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(255),
    `alias` VARCHAR(255),
    `hitcount` INT DEFAULT '0',
    `secretcode` INT NOT NULL,
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

//gets it from .env file
// DB_HOST=localhost
// DB_USER=orsilarssen
// DB_PASS=yourpassword
// DB=links

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

// connect to database
try {
  conn.connect();
} catch (err) {
  console.log(`Error with database connection ${err}`);
};


// app.post('/api/links',function (request, response) {
//     let sql = "SELECT * FROM todo_table WHERE deleted != True";
//     conn.query(sql, function(err, results) {
//         response.json(results)
//   })
// });
'use strict';

app.post('/api/links', function (request, response) {
  let url = request.body.url;
  let alias = request.body.alias;
  let secretcode = Math.floor(1000 + Math.random() * 9000);
  let sqlAliasCheck = "SELECT alias FROM links_table WHERE alias = ?"
  let fail = false;
  conn.query(sqlAliasCheck, [alias], function (error, result) {
    if (error) {
      console.log(error)
    } else {
      if (result.length != 0) {
        response.json({ error: "This alias is already in use, please choose another one!" })
      } else {
        let sql = "INSERT INTO links_table (url,alias,secretcode) VALUES(?,?,?)";
        console.log('still running')
        conn.query(sql, [url, alias, secretcode], function (error, result) {
          if (error) {
            response.status(500).send({ response: error })
          } else {
            console.log(result)
            response.json({
              id: result.insertId,
              url: url,
              hitcount: 0,
              alias: alias,
              secretcode: secretcode
            })
          }
        })
      }
    }
  })
});

app.post('/api/getalias', function (req,res){
  let alias = req.body.alias
  console.log(alias)
  let sqlAliasCheck = "SELECT * FROM links_table WHERE alias = ?"
  conn.query(sqlAliasCheck, [alias], function (error, result) {
    if (error) {
      console.log(error)
    } else {
      console.log(result)
      if (result.length != 0) {
        res.json({ url: result[0].url })
      }else {
      res.json({kocsog:'ez nem letezik redirect bazmeg'})
     }
    }
})
});

app.get('/api/all', function (req,res){
  let sqlAll = "SELECT id,url,alias,hitcount FROM links_table"
  conn.query(sqlAll, function (error, result){
    if (error) {
      console.log(error)
    } else {
      console.log(result)
      if (result.length != 0) {
        res.json(result)}
    }
  })
});


// set port
app.listen(3001, function () {
  console.log('Node app is running on port 3001');
});

