angular
  .module("TravellyApp")
  .controller("UsersIndexController", UsersIndexController);

UsersIndexController.$inject = ["User"];
UsersIndexController((User) => {
  this.all = User.query();
});