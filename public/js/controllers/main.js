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

  function filterStoredUserSearch(searchResults) {
    var filteredSearchResults = [];

    searchResults.forEach(function (searchResult, index) {
      var filteredSearchResult = {
        locationId: searchResult.OutboundLeg.Destination.PlaceId,
        locationName: searchResult.OutboundLeg.Destination.CityName
      };

      filteredSearchResults.push(filteredSearchResult);
    });

    return filteredSearchResults;
  };

  this.storeUserSearch = function() {
    this.filteredSearchResults = filterStoredUserSearch(this.searchResults);

    User.update({ id: this.currentUser._id },
      { filteredSearchResults: this.filteredSearchResults },
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

    self.storeUserSearch();
    var locationIds = self.filteredSearchResults.map(function(result) {
      return result.locationId;
    });

    User.query({ locationIds: locationIds.join(',') }, function(users) {
      self.similarUsers = users;
      console.log("This are the similar users: ", users)
    });
  });
}