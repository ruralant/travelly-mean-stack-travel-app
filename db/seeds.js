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
    filteredSearchResults: [] 
  },{
    username: "Adriana Black",
    email: "adri@adri",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: [] 
  },{
    username: "Marta Venezia",
    email: "marta@marta",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Andrew Smith",
    email: "andrew@andrew",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Axel Berdugo",
    email: "axel@axel",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Becky Bolton",
    email: "becky@becky",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Ben Blowers",
    email: "ben@ben",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Cameron Perrin",
    email: "cameron@cameron",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Chetan Barot",
    email: "chetan@chetan",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Chris Casey",
    email: "chris@chris",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Jason Lai",
    email: "jason@jason",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Jeremy Smith",
    email: "jeremy@jeremy",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Julian Wyatt",
    email: "julian@julian",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Will Cook",
    email: "will@will",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Kaitlyn Tierney",
    email: "kat@kat",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  },{
    username: "Shu Chia",
    email: "shu@shu",
    profilePicture: "...",
    password: "password",
    passwordConfirmation: "password",
    filteredSearchResults: []
  }
], function(err, users) {
  console.log(users);
  mongoose.connection.close();
})