require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./app/routes');
const seeds = require('./app/seeds');

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(config.database, () => {
  seeds.seedLanguage();
  seeds.seedCurrency();
  seeds.seedTimezone();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(`Hello! The API is at http://localhost:${port}/api`);
});

const { apiRoutes, staticRoutes } = routes;

app.use('/api', apiRoutes(express));
app.use('/static', staticRoutes(express));

app.listen(port);
console.log(`service is running at http://localhost:${port}`);
