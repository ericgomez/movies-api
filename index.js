const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(request, response) {
  response.send('Hello World');
});


app.get('/json', function(request, response) {
  response.json({ hello: 'world'});
});

app.listen(config.port, function() {
  console.log(`listening address http://localhost:${config.port}`);
});
