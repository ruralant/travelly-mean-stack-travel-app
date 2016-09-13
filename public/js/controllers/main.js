angular
  .module("TravellyApp")
  .controller("MainController", MainController);

MainController.$inject = ["$auth", "$state", "$rootScope", "Flights"];
function MainController($auth, $state, $rootScope, Flights) {

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

  this.search = function() {
    Flights.query(this.location, this.departure, this.return, this.budget)
    .then(function(results){
      self.results = results;
      $state.go("results");
    });
  }
}