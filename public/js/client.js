angular
  .module('travellyApp', ['satellizer'])
  .config(oAuthConfig)
  .controller("MainController", MainController);

oAuthConfig.$inject = ["$authProvider"];
function oAuthConfig($authProvider) {

  $authProvider.facebook({
    url: '/oauth/facebook',
    clientId: "329436664057921"
  })

  $authProvider.twitter({
    url: '/oauth/twitter',
    clientId: "y9CHIe4zAlRP36gfp1SXDBqbj"
  });
}

MainController.$inject = ["$auth"];
function MainController($auth) {

  this.authenticate = function(provider) {
    $auth.authenticate(provider);
  }
}