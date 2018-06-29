const express = require('express');
const app = new express();

app.set('view engine', 'ejs');

app
  .get('/', (req, res) => res.render('../app/index.ejs', {}))
  .use(express.static(__dirname + '/../.tmp'))
  .listen(8080, () => console.log('Server running on port 8080'));
