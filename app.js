var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(port, function() {
  console.log("Express is listening on port " + port);
});

module.exports = app;