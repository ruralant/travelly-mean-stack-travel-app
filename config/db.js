dbURIs = {
  test: "mongodb://localhost/auth-express-test",
  development: "mongodb://localhost/travelly-app",
  production: process.env.MONGOLAB_URI || "mongodb://localhost/travelly-app"
};

module.exports = (env) => {
  return dbURIs[env];
};