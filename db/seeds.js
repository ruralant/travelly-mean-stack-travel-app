var bluebird = require('bluebird');
var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/travelly-app");

User.collection.drop();

User.create([
  {
    username: "Edward",
    email: "ed@ed",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Heathrow" 
  },{
    username: "Adriana",
    email: "adri@adri",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Luton" 
  },{
    username: "Marta",
    email: "marta@marta",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  }
], function(err, users) {
  console.log(users);
  mongoose.connection.close();
})