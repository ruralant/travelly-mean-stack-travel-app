angular
  .module('TravellyApp')
  .factory('User', User);

User.$inject = ["$resource"];
function User($resource) {
  return $resource('/api/users/:id', { id: '@_id' },  {
    update: {
      method: "PUT"
    }
  });
}