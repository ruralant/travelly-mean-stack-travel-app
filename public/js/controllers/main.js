angular
  .module("TravellyApp")
  .controller("MainController", MainController);

MainController.$inject = ["$auth", "$state", "$rootScope", "User"];
function MainController($auth, $state, $rootScope, User) {

  var self = this;
  this.searchResults = [];

  this.currentUser = $auth.getPayload();

  this.logout = function() {
    $auth.logout();
    this.currentUser = null;
    $state.go("/");
  }

  this.storeUserSearch = function() {
    User.update({ id: this.currentUser._id },
      { searchParams: this.searchResults},
      function(res) {
        self.currentUser = res;
        console.log(self.currentUser);
      });
  };

  $rootScope.$on("loggedIn", function() {
    self.currentUser = $auth.getPayload();
  });

  $rootScope.$on("searchResults", function(e, data) {
    self.searchResults = data;
    console.log("Here are all the flights to save.. ", data);
    self.storeUserSearch();
  });
}