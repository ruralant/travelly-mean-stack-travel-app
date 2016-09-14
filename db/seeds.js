var bluebird = require('bluebird');
var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/travelly-app");

User.collection.drop();

User.create([
  {
    username: "Edward Kemp",
    email: "ed@ed",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Heathrow" 
  },{
    username: "Adriana Black",
    email: "adri@adri",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Luton" 
  },{
    username: "Marta Venezia",
    email: "marta@marta",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Andrew Smith",
    email: "andrew@andrew",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Axel Berdugo",
    email: "axel@axel",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Becky Bolton",
    email: "becky@becky",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Ben Blowers",
    email: "ben@ben",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Cameron Perrin",
    email: "cameron@cameron",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Chetan Barot",
    email: "chetan@chetan",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Chris Casey",
    email: "chris@chris",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Jason Lai",
    email: "jason@jason",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Jeremy Smith",
    email: "chris@chris",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Julian Wyatt",
    email: "chris@chris",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Will Cook",
    email: "chris@chris",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Kaitlyn Tierney",
    email: "chris@chris",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  },{
    username: "Shu Chia",
    email: "chris@chris",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    location: "London Stansted"
  }
], function(err, users) {
  console.log(users);
  mongoose.connection.close();
})