const router = require('express').Router();

const facebookController = require('../controllers/facebookOauth');
const twitterController = require('../controllers/twitterOauth');
const authController = require('../controllers/auth');
const usersController = require('../controllers/users');
const flightsController = require('../controllers/flights');

const jwt = require('jsonwebtoken');
const secret = require('./token').secret;
const upload = require('./upload');

secureRoute((req, res, next) => {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized" });

  let token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, (err, payload) => {
    if(err || !payload) return res.status(401).json({ message: "Unauthorized" });
    req.user = payload;
    next();
  });
});

router.get('/flights', flightsController.index);

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