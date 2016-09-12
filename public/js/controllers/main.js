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

  this.search = function() {
    SkyScanner.getFlights(this.location, this.departureDate, this.returnDate)
    .then(function(results){
      self.quotes = results.Quotes;
      self.places = results.Places;
      self.carriers = results.Carriers;

      $state.go("results");
    });
  }
}