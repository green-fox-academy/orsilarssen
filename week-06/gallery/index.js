const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('assets'));
const images = [
  //"https://images.unsplash.com/photo-1548296404-93c7694b2f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
  // "https://images.unsplash.com/photo-1520683357052-ad18d9ed27b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
   "https://images.unsplash.com/photo-1504575958497-ccdd586c2997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80", 
  // "https://images.unsplash.com/photo-1549305875-a18ca077f147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1040&q=80",
  // "https://images.unsplash.com/photo-1534507035278-5d44aaaffe3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
  // "https://images.unsplash.com/photo-1499823382510-3990e4b8a04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  // "https://images.unsplash.com/photo-1470294402047-fc1b5f39bd99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1054&q=80",
  // "https://images.unsplash.com/photo-1498393533405-8dd2ddbf6db4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {images});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
