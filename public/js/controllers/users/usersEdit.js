angular
  .module("TravellyApp")
  .controller("UsersEditController", UsersEditController);

UsersEditController.$inject = ["User", "$state"];
function UsersEditController(User, $state) {
  this.selected = User.get($state.params);

  this.save = function() {
    this.selected.$update(function() {
      $state.go("usersShow", $state.params);
    });
  }
}