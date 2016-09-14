angular
  .module("TravellyApp")
  .controller("UsersShowController", UsersShowController);

UsersShowController.$inject = ["User", "$state"];
function UsersShowController(User, $state) {
  this.selected = User.get($state.params);

  this.delete = function() {
    this.selected.$remove(function() {
      $state.go("landing");
    });
  }
}