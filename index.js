const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const {
  logErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');

// body parser
app.use(express.json());

moviesApi(app);

//Los middleware siempre deben de ir al final de las rutas
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`listening address http://localhost:${config.port}`);
});
