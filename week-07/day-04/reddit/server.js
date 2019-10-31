const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const env = require('dotenv').config();

app.use(express.json());

let conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'reddit'
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Hello world!');
});


app.post('/posts', function (req, res) {
  //let date = Date.now();
  let title = req.body.title;
  let url = req.body.url;
  let score = 0;
  
  var sql = `INSERT INTO Posts3 (url, title,score) VALUES ("${url}", "${title}", "${score}")`;
  conn.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
        console.log(err)
      } else {
          console.log(result)
          res.json({
              "id": result.insertId,
              "title": title,
              "url": url,
              "score": 0,
              })
          }
      })
})

app.get('/posts', function(req, res) {
  var sql = "SELECT * FROM Posts3";
  conn.query(sql, function(err, rows) {
    if (err) {
      res.status(500).send({ error: 'Something failed!' })
    } else {
    res.json(rows)
    }
  })
});

/*put method for update product*/
app.put('/posts/:id/upvote', function(req, res) {
  let id = req.params.id;
  let title = req.body.title;
  let url = req.body.url;
  let score = req.body.score;

  var sql = `UPDATE Posts3 SET title="${title}", url="${url}", score="${score}" WHERE id=${id}`;
  conn.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    } else {
    console.log(result)
    res.json({
      "id": req.params.id,
      "title": title,
      "url": url,
      "score": req.body.score+1,
      })
    }
  })
});
  
app.listen(PORT);