angular
  .module("TravellyApp")
  .controller("UsersEditController", UsersEditController);

UsersEditController.$inject = ["User", "$state"];
function UsersEditController(User, $state) {
  this.selected = User.get($state.params);

  this.save = () => {
    this.selected.$update(() => {
      $state.go("usersShow", $state.params);
    });
  };
}