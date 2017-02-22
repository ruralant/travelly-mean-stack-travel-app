dbURIs = {
  test: "mongodb://localhost/auth-express-test",
  development: "mongodb://localhost/travelly-app",
  production: process.env.MONGOLAB_URI || "mongodb://localhost/travelly-app"
};

module.exports = function(env) {
  return dbURIs[env];
};