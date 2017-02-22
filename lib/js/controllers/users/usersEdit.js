angular
  .module("TravellyApp")
  .controller("UsersEditController", UsersEditController);

UsersEditController.$inject = ["User", "$state"];
UsersEditController((User, $state) => {
  this.selected = User.get($state.params);

  this.save = () => {
    this.selected.$update(() => {
      $state.go("usersShow", $state.params);
    });
  };
});