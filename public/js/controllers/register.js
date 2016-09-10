angular
  .module("TravellyApp")
  .controller("RegisterController", RegisterController);

RegisterController.$inject = ["$auth", "$state"];
function RegisterController($auth, $state) {

  this.user = {};

  this.submit = function() {
    $auth.signup(this.user, {
      url: '/api/register'
    })
    .then(function(){
      $rootScope.$broadcast("loggedIn");
      $state.go("usersShow");
    })
  }
}