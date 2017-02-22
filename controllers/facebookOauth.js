const User = require('../models/user');
const request = require('request-promise');
const jwt = require('jsonwebtoken');
const secret = require('../config/token').secret;
const qs = require('qs');

function login(req, res) {
  request.post({
    url: "https://graph.facebook.com/v2.5/oauth/access_token",
    qs: {
      client_id: process.env.FACEBOOK_API_KEY,
      client_secret: process.env.FACEBOOK_API_SECRET,
      code: req.body.code,
      redirect_uri: "https://travelly-app.herokuapp.com/"
    },
    json: true
  }).then((access_token) => {
    return request.get({
      url: "https://graph.facebook.com/v2.5/me?fields=id,email,name,picture",
      qs: access_token,
      json: true
    });
  }).then((profile) => {
    // console.log(profile);
    return User.findOne({ email: profile.email })
      .then((user) => {
         if(user) {
           user.facebookId = profile.id;
           user.profilePicture = profile.picture ? profile.picture.data.url : null;
         }
         else {
           user = new User({
             username: profile.name,
             email: profile.email,
             facebookId: profile.id,
             profilePicture: profile.picture ? profile.picture.data.url : null
           });
         }
         return user.save();
      });
    }).then((user) => {
      let payload = {
        _id: user._id,
        profilePicture: user.profilePicture,
        username: user.username
      };

      let token = jwt.sign(payload, secret, { expiresIn: '24h' });

      res.status(200).json({ token });
    }).catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
}

module.exports = {
  login
};