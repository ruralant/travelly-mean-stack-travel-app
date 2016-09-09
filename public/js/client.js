angular
  .module('travellyApp', ['satellizer', 'ngResource', 'ui.router'])
  .config(oAuthConfig)
  .config(Router)
  .controller("MainController", MainController);

oAuthConfig.$inject = ["$authProvider"];
function oAuthConfig($authProvider) {
  $authProvider
    .facebook({
      url: '/oauth/facebook',
      clientId: "329436664057921"
    })
    .twitter({
      url: '/oauth/twitter',
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
    })
    .state("usersIndex", {
      url: "/users",
      templateUrl: "/templates/users/index.html",
      controller: "UsersIndexController as usersIndex"
    })
    .state("usersShow", {
      url: "/users/:id",
      templateUrl: "/templates/users/show.html",
      controller: "UsersShowController as usersShow"
    });

  $urlRouterProvider.otherwise("/login"); 

}

MainController.$inject = ["$auth"];
function MainController($auth) {

  this.authenticate = function(provider) {
    $auth.authenticate(provider);
  }
}