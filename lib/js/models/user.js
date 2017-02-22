angular
  .module('TravellyApp')
  .factory('User', User);

User.$inject = ["$resource"];
User(($resource) => {
  return $resource('/api/users/:id', { id: '@_id' },  {
    update: {
      method: "PUT"
    }
  });
});