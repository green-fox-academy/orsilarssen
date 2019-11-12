/*npm modules:
node-fetch
body-parser
ejs
cors
mysql
 
-----------------
database
-----------------
CREATE DATABASE `todo_app`;
CREATE TABLE `todo_table` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `todo` VARCHAR(255),
    `completed` BOOLEAN DEFAULT '0',
    `deleted` BOOLEAN DEFAULT '0',
    PRIMARY KEY (`id`)
);*/

'use strict';
 

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors')
 
app.use(cors())
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'todo_app'
});
 
// connect to database
conn.connect();
 
app.get('/todos',function (request, response) {
    let sql = "SELECT * FROM todo_table WHERE deleted != True";
    conn.query(sql, function(err, results) {
        response.json(results)
  })
});
 
app.post('/add_todo',function (request, response) {
    let todo = request.body.todo;
    let sql = "INSERT INTO todo_table (todo) VALUES(?)";
    conn.query(sql, [todo], function (error) {
        if (error) {
            response.status(500).send({response: error})
        } else {
            response.redirect('http://localhost:8080/')
        }
    })
});
 
app.put('/update_todo',function (request, response) {
    let todo_id = request.body.todo_id;
    let action = request.body.action;
    let sql;
    if (action == 'complete'){
        sql = "UPDATE todo_table  SET completed = True WHERE id = ?";
    }
    else if (action == 'delete'){
        sql = "UPDATE todo_table  SET deleted = True WHERE id = ?";
    }
    conn.query(sql, [todo_id], function (error) {
        if (error) {
            response.status(500).send({response: error})
        } else {
            response.redirect('http://localhost:8080/')
        }
    })
});
 
// set port
app.listen(3001, function () {
    console.log('Node app is running on port 3001');
});
 
module.exports = app;