angular
  .module("TravellyApp")
  .controller("UsersIndexController", UsersIndexController);

UsersIndexController.$inject = ["User"];
function UsersIndexController(User) {
  this.all = User.query();
}