var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  profilePicture: String,
  email: String,
  githubId: Number,
  facebookId: Number,
  twitterId: Number
});

module.exports = mongoose.model('User', userSchema);