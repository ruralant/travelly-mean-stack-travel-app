var bluebird = require('bluebird');
var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/travelly-app");

User.collection.drop();

User.create([
  {
    username: ,
    email: ,
    profilePicture: ,
    password: "password",
    passwordConfirmation: "password" 
  },{
    username: ,
    email: ,
    profilePicture: ,
    password: "password",
    passwordConfirmation: "password" 
  },{
    username: ,
    email: ,
    profilePicture: ,
    password: "password",
    passwordConfirmation: "password"
  }
], function(err, users) {
  console.log(users);
  mongoose.connection.close();
})