var User = require('../models/user');
var request = require('request-promise');
var jwt = require('jsonwebtoken');
var secret = require('../config/token').secret;
var qs = require('qs');

function login(req, res) {
  if (!req.body.oauth_token || !req.body.oauth_verifier) {

    return request.post({
      url: "https://api.twitter.com/oauth/request_token",
      oauth: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        callback: req.body.redirectUri
      }
    })
    .then(function(response) {
      var token = qs.parse(response);
      res.status(200).send(token);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).json(err);
    });

  } else {
    return request.post({
      url: "https://api.twitter.com/oauth/access_token",
      form: {
        oauth_token: req.body.oauth_token,
        oauth_verifier: req.body.oauth_verifier
      }
    })
    .then(function(token) {
      token = qs.parse(token);

      return request.get({
        url: "https://api.twitter.com/1.1/users/show.json",
        qs: {
          screen_name: token.screen_name
        },
        oauth: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          oauth_token: token.oauth_token
        },
        json: true
      });
    })

    .then(function(profile) {
      return User.findOne({ twitterId: profile.id })
        .then(function(user) {
          if(user) {
            user.twitterId = profile.id;
            user.profilePicture = profile.profile_image_url;
          }
          else {
            user = new User({
              username: profile.name,
              twitterId: profile.id,
              profilePicture: profile.profile_image_url
            });
          }

          return user.save();
        });
    })

    .then(function(user) {
      var payload = {
        _id: user._id,
        username: user.username,
        avatar: user.profilePicture
      };

      var token = jwt.sign(payload, secret, { expiresIn: '24h' });

      res.status(200).json({ token: token });
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).json(err);
    });
  }
}

module.exports = {
  login: login
};