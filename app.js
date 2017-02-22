const express = require('express');
const app = express();
const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routes = require('./config/routes');

mongoose.Promise = bluebird;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travelly-app");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

module.exports = app;


