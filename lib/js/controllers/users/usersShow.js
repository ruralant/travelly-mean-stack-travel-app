angular
  .module("TravellyApp")
  .controller("UsersShowController", UsersShowController);

UsersShowController.$inject = ["User", "$state"];
UsersShowController((User, $state) => {
  this.selected = User.get($state.params);

  this.delete = () => {
    this.selected.$remove(() => {
      $state.go("landing");
    });
  };
});