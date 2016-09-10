var s3 = require('./s3');
var multer = require('multer')
var multerS3 = require('multer-s3');
var uuid = require('uuid');

module.exports = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: function(req, file, next) {
      next(null, file.mimetype);
    },
    key: function(req, file, next) {
      var ext = '.' + file.originalname.split('.').splice(-1)[0];
      var filename = uuid.v1() + ext;
      next(null, filename);
    }
  })
});