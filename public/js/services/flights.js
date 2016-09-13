angular
  .module("TravellyApp")
  .service("Flights", Flights);

Flights.$inject = ["$http"];
function Flights($http) {
  this.query = function(location, departureDate, returnDate) {
    return $http({
      method: "GET",
      data: {
        location: location,
        departureDate: departureDate,
        returnDate: returnDate
      },
      url: "/api/flights"
    })
    .then(function(res) {
      return res.data;
    })
  }
}