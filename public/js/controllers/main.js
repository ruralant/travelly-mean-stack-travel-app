angular
  .module("TravellyApp")
  .controller("MainController", MainController);

MainController.$inject = ["$auth", "$state", "$rootScope", "User"];
function MainController($auth, $state, $rootScope, User) {

  let self = this;
  this.searchResults = [];

  this.currentUser = $auth.getPayload();

  this.logout = () => {
    $auth.logout();
    this.currentUser = null;
    $state.go("/");
  };

  function filterStoredUserSearch(searchResults) {
    let filteredSearchResults = [];

    searchResults.forEach((searchResult, index) => {
      let filteredSearchResult = {
        locationId: searchResult.OutboundLeg.Destination.PlaceId,
        locationName: searchResult.OutboundLeg.Destination.CityName
      };

      filteredSearchResults.push(filteredSearchResult);
    });

    return filteredSearchResults;
  }

  this.storeUserSearch = () => {
    this.filteredSearchResults = filterStoredUserSearch(this.searchResults);

    User.update(
      { id: this.currentUser._id },
      { filteredSearchResults: this.filteredSearchResults },
      (res) => {
        self.currentUser = res;
        console.log(self.currentUser);
      });
  };

  $rootScope.$on("loggedIn", () => {
    self.currentUser = $auth.getPayload();
  });

  $rootScope.$on("searchResults", (e, data) => {
    self.searchResults = data;

    self.storeUserSearch();
    let locationIds = self.filteredSearchResults.map((result) => {
      return result.locationId;
    });

    User.query({ locationIds: locationIds.join(',') }, (users) => {
      self.similarUsers = users;
      console.log("This are the similar users: ", users);
    });
  });
}