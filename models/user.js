var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: String,
  passwordHash: String,
  githubId: Number,
  facebookId: Number,
  twitterId: Number,
  profilePicture: String,
  location: String,
  budget: Number,
  departureDate: Date,
  returnDate: Date,
  destinations: []
});

userSchema.virtual('password')
  .set(function(password) {
    this._password = password;
    this.passwordHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(8));
  });

userSchema.virtual('passwordConfirmation')
  .get(function() {
    return this._passwordConfirmation;
  })
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.path('passwordHash')
  .validate(function(passwordHash) {
    if(this.isNew) {

      if(!this._password) {
        return this.invalidate('password', 'A password is required');
      }

      if(this._password !== this._passwordConfirmation) {
        return this.invalidate('passwordConfirmation', 'Passwords not match, try again.');
      }
    }
  });

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
}

module.exports = mongoose.model('User', userSchema);