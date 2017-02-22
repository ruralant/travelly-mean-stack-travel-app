const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secret = require('../config/token').secret;

function login(req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if(err) res.send(500).json(err);
    if(!user || !user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: "Credentials not valid" });
    }

    let payload = { _id: user._id, username: user.username };
    let token = jwt.sign(payload, secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      message: "Login successful!",
      token
    });
  });
}

function register(req, res) {
  User.create(req.body, (err, user) => {
    if(err) return res.status(400).json(err);

    let payload = { _id: user._id, username: user.username };
    let token = jwt.sign(payload, secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      message: "Thanks for registering!",
      token
    });
  });
}

module.exports = {
  login,
  register
};