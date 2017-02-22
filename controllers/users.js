var User = require('../models/user');

function usersIndex(req, res) {

  var params = {};

  if(req.query.locationIds) {
    var locationIds = req.query.locationIds.split(',').map(function(str) {
      return parseInt(str, 10);
    });
    params['filteredSearchResults.locationId'] = { $in: locationIds };
  }

  User.find(params, function(err, users) {
    if(err) return res.status(500).json(err);
    return res.status(200).json(users);
  });
}

function usersCreate(req, res) {
  User.create(req.body, function(err, user) {
    if(err) return res.status(400).json(err);
    return res.status(201).json(user);
  });
}

function usersShow(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) return res.status(500).json(err);
    if(!user) return res.status(404).json({ message: "No user with this ID" });
    return res.status(200).json(user);
  });
}

function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function(err, user) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(user);
  });
}

function usersDelete(req, res) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}

module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};