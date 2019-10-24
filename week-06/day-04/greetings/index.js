const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var name = '';
  if (Object.entries(req.query).length === 0) {
    name = 'Guest';
  } else {
    name = req.query.name
  }
  res.render('home', {
    title: 'Welcome Back, ' + name + '!',
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});