var router = require('express').Router();

var facebookController = require('../controllers/facebookOauth');
var twitterController = require('../controllers/twitterOauth');

router.post('/oauth/facebook', facebookController.login);
router.post('/oauth/twitter', twitterController.login);

module.exports = router;