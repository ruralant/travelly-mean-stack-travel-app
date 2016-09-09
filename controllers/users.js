var User = require('../models/user');

function userIndex(req, res) {
  User.find()
    .then(function(users) {
      res.status(200).json(users)
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function userShow(req, res) {
  User.findById(req.params.id)
    .then(function(user) {
      res.status(200).json(user);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

module.exports = {
  index: userIndex,
  show: userShow
}