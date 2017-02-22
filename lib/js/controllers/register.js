angular
  .module("TravellyApp")
  .controller("RegisterController", RegisterController);

RegisterController.$inject = ["$auth", "$state", "$rootScope"];
function RegisterController($auth, $state, $rootScope) {

  this.user = {};

  this.submit = function() {
    console.log("Submit");
    $auth.signup(this.user, {
      url: '/api/register'
    })
    .then(function(res){
      $rootScope.$broadcast("loggedIn");
      $state.go('search');
    });
  };
}