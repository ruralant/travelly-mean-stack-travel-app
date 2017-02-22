const s3 = require('./s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid');

module.exports = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: (req, file, next) => {
      next(null, file.mimetype);
    },
    key: (req, file, next) => {
      let ext = '.' + file.originalname.split('.').splice(-1)[0];
      let filename = uuid.v1() + ext;
      next(null, filename);
    }
  })
});