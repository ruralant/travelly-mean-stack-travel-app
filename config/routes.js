var router = require('express').Router();

var facebookController = require('../controllers/facebookOauth');
var twitterController = require('../controllers/twitterOauth');
var authController = require('../controllers/auth');
var usersController = require('../controllers/users');
var flightsController = require('../controllers/flights');

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

router.get('/flights', flightsController.flights);

router.route('/users')
  .all(secureRoute)
  .get(usersController.index)
  .post(usersController.create);

router.route('/users/:id')
  .all(secureRoute)
  .get(usersController.show)
  .put(usersController.update)
  .patch(usersController.update)
  .delete(usersController.delete);

router.post('/oauth/facebook', facebookController.login);
router.post('/oauth/twitter', twitterController.login);
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;