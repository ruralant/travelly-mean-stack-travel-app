angular
  .module("TravellyApp", ["ngResource", "ui.router", "satellizer"])
  // .config(authProvider, Router)
  .config(oAuthConfig)
  .config(Router)

oAuthConfig.$inject = ["$authProvider"];
function oAuthConfig($authProvider) {
  $authProvider.facebook({
    url: 'api/oauth/facebook',
    clientId: "329436664057921"
  })
  $authProvider.twitter({
    url: 'api/oauth/twitter',
    clientId: "y9CHIe4zAlRP36gfp1SXDBqbj"
  });
}

Router.$inject = ["$stateProvider", "$urlRouterProvider"];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider 
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: "LoginController as login"
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: "RegisterController as register"
    });

  $urlRouterProvider.otherwise("/login"); 
}