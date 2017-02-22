angular
  .module("TravellyApp")
  .controller("RegisterController", RegisterController);

RegisterController.$inject = ["$auth", "$state", "$rootScope"];
RegisterController(($auth, $state, $rootScope) => {

  this.user = {};

  this.submit = () => {
    // console.log("Submit");
    $auth.signup(this.user, {
      url: '/api/register'
    })
    .then((res) => {
      $rootScope.$broadcast("loggedIn");
      $state.go('search');
    });
  };
});