angular
  .module("TravellyApp", ["ngResource", "ui.router", "satellizer"])
  // .config(authProvider, Router)
  .config(oAuthConfig)
  .config(Router)

// Auth Social API Keys
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

// Rooting 
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
    .state('search', {
      url: '/search',
      templateUrl: '/templates/search.html',
      controller: "SearchController as search"
    })
    .state('results', {
      url: '/results',
      templateUrl: '/templates/results.html',

    })
    .state('userIndex', {
      url: '/users',
      templateUrl: '/templates/users/index.html',
      controller: "UsersIndexController as users"
    })
    .state('userShow', {
      url: '/users/:id',
      templateUrl: '/templates/users/show.html',
      controller: "UsersShowController as usersShow"
    })
    .state("userEdit", {
      url: "/users/:id/edit",
      templateUrl: "/templates/users/edit.html",
      controller: "UsersEditController as usersEdit"
    })
    .state('landingPage', {
      url: '/landing-page',
      templateUrl: '/templates/landing.html',
    });

  $urlRouterProvider.otherwise("/landing-page"); 
}

