const User = require('../models/user');
const request = require('request-promise');
const jwt = require('jsonwebtoken');
const secret = require('../config/token').secret;
const qs = require('qs');

login((req, res) => {
  if (!req.body.oauth_token || !req.body.oauth_verifier) {

    return request.post({
      url: "https://api.twitter.com/oauth/request_token",
      oauth: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        callback: req.body.redirectUri
      }
    })
    .then((response) => {
      let token = qs.parse(response);
      res.status(200).send(token);
    })
    .catch((err) => {
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
    .then((token) => {
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

    .then((profile) => {
      return User.findOne({ twitterId: profile.id })
        .then((user) => {
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

    .then((user) => {
      let payload = {
        _id: user._id,
        username: user.username,
        avatar: user.profilePicture
      };

      let token = jwt.sign(payload, secret, { expiresIn: '24h' });

      res.status(200).json({ token });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }
});

module.exports = {
  login
};