angular
  .module("TravellyApp")
  .controller("MainController", MainController);

MainController.$inject = ["$auth", "$state", "$rootScope"];
function MainController($auth, $state, $rootScope) {

  var self = this;

  this.currentUser = $auth.getPayload();

  this.logout = function() {
    $auth.logout();
    this.currentUser = null;
    $state.go("/");
  }

  $rootScope.$on("loggedIn", function() {
    self.currentUser = $auth.getPayload();
  });

  $rootScope.$on("searchResults", function(e, data) {
    self.searchResults = data;
  });
}