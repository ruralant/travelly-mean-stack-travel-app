var express = require('express');
var app = express();
var bluebird = require('bluebird');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var routes = require('./config/routes');

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/travelly-app");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/', routes);

app.listen(8000, function() {
  console.log("Express is up and running!");
});

module.exports = app;


