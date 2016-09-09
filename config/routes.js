var router = require('express').Router();

var facebookController = require('../controllers/facebookOauth');
var twitterController = require('../controllers/twitterOauth');
var authController = require('../controllers/auth');
var usersController = require('../controllers/users');

var jwt = require('jsonwebtoken');
var secret = require('./token').secret;
var upload = require('./upload');

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized" });

  var token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, function(err, payload) {
    if(err || !payload) return res.status(401).json({ message: "Unauthorized" });
    req.user = payload;
    next();
  });
}

router.route('/users')
  .get(usersController.index)

router.route('/users/:id')
  .get(usersController.show)

router.post('/oauth/facebook', facebookController.login);
router.post('/oauth/twitter', twitterController.login);
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;