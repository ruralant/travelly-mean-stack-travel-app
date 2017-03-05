angular
  .module("TravellyApp")
  .controller("LoginController", LoginController);

LoginController.$inject = ["$auth", "$state", "$rootScope"];
function LoginController($auth, $state, $rootScope) {

  this.credentials = {};

  this.authenticate = (provider) => {
    $auth.authenticate(provider)
      .then(() => {
        $rootScope.$broadcast("loggedIn");
        $state.go('search');
      });
  };

  this.submit = () => {
    $auth.login(this.credentials, {
      url: "/api/login"
    }).then(() => {
      $rootScope.$broadcast("loggedIn");
      $state.go('search');
    });
  };
}