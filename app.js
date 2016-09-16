var express = require('express');
var app = express();
var bluebird = require('bluebird');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');

var routes = require('./config/routes');

mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travelly-app");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', routes);

// app.listen(8000, function() {
//   console.log("Express is up and running!");
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

module.exports = app;


