const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const env = require('dotenv').config();
const cookieParser = require('cookie-parser');
const fetch = require("node-fetch");
const bodyParser = require("body-parser")
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('views'));

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Hello world!');
});

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/posts', function(req, res) {
  var sql = "SELECT * FROM Posts3";
  conn.query(sql, function(err, posts) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' });
    } else {
      //console.log(req.cookies);
      //res.cookie('house_user', 4567, {maxAge: 9000000000, httpOnly: true, secure: false });
      //res.json({rows:posts});
      res.sendFile(path.join(__dirname + '/views/index.html'));
    }
  })
});

app.post('/posts', function (req, response) {
  let timestamp = Date.now();
  let title = req.body.title;
  let url = req.body.url;
  let score = 0;
  
  var sql = 'INSERT INTO Posts3 (url, title,score,timestamp) VALUES ("url=?", "title=?", "score=?", "timestamp=?"), [url, title, score,timestamp]';
  conn.query(sql, function(err, result) {
      if(err) {
        response.status(500).send({ error: 'Something failed!' });
        console.log(err);
      } else {
          console.log(result);
          response.json({
              "id": result.insertId,
              "title": title,
              "url": url,
              "timestamp":timestamp,
              "score": 0,
              })
          }
      })
});



// app.get('/', function(req, res) {
//   let response = fetch('http://localhost:3000/posts').then((resp) => resp.json())
//   response.then(function (data){
//     console.log(data)
//     res.render("views/index.html",data)
//   })
// })

// app.get('/', function(req, res) {
// 	res.sendFile(path.join(__dirname + '/views/index.html'));
// });

//app.get('/addpost', function(req, res) {
	//res.sendFile(path.join(__dirname + '/views/index.html'));
//})


app.put('/posts/:id/vote', function(req, res) {
  let id = req.params.id; //req.params comes from path segments of the URL that match a 
  //parameter in the route definition

  let updown = req.body.vote; //req.body properties come from a form post where the form data 
  //(which is submitted in the body contents) has been parsed into properties of the body tag.

  //Get the Post by ID so we can check its Score value

  conn.query('SELECT * FROM Posts3 WHERE id= ?', [id], function (error, query_result) {
      if (error) {
          res.status(500).send({error_message: `${error}`})
      } else {
          console.log(query_result)
          var score = query_result[0].score 
          if (updown == "up") {
            score ++; //increment by 1
          } else if (updown == "down") {
            score --; //decrement by 1
          } else {
            return res.status(400).json({error:`Invalid up/downvote: ${updown}`},)
          }
      }
      console.log(score)        
      //Update the Post score by ID with the updated score
      conn.query(`UPDATE Posts3 SET score="${score}" WHERE id=${id}`, function(error) {
          if (error) {
              res.status(500).send({error: `${error}`})
          } else {
              return res.json({
                      "id": req.params.id,
                      "score": score,
                      "title": query_result[0].title,
                      "url": query_result[0].url,
                      "timestamp": query_result[0].timestamp 
              })
          }
      })
  })
});

app.post('/api/login', function (req, response) {
  let username = req.body.username;
  let password = req.body.password;
  var sql = `SELECT * FROM users WHERE users = "${username}" AND password = "${password}"`;
  conn.query(sql, function(err, result) {
      if(err) {
        response.status(500).send({ error: 'Something failed!' })
        console.log(err)
      } else {
          if(result.length > 0) {
            var rand4digit = Math.floor(1000 + Math.random() * 9000);
            response.cookie(username, rand4digit, {maxAge: 9000000000, httpOnly: true, secure: false });
            response.redirect('/posts')
          }
          else{
            response.json({login:'failed, invalid user/pw'})
          }
          }
      })
});

app.listen(PORT);