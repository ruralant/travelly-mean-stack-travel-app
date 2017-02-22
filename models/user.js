const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: String,
  githubId: Number,
  facebookId: Number,
  twitterId: Number,
  profilePicture: String,
  passwordHash: String,
  filteredSearchResults: []
});

userSchema.virtual('password')
  .set((password) => {
    this._password = password;
    this.passwordHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(8));
  });

userSchema.virtual('passwordConfirmation')
  .get(() => {
    return this._passwordConfirmation;
  })
  .set((passwordConfirmation) => {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.path('passwordHash')
  .validate((passwordHash) => {
    if(this.isNew) {

      if(!this._password) {
        return this.invalidate('password', 'A password is required');
      }

      if(this._password !== this._passwordConfirmation) {
        return this.invalidate('passwordConfirmation', 'Passwords not match, try again.');
      }
    }
  });

userSchema.methods.validatePassword = (password) => {
  return bcrypt.compareSync(password, this.passwordHash);
};

module.exports = mongoose.model('User', userSchema);