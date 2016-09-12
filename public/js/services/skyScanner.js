angular
  .module("TravellyApp")
  .service("SkyScanner", SkyScanner);

// SkyScanner API GET request
SkyScanner.$inject = ["$http"];
function SkyScanner($http) {
  this.getFlights = function(location, departureDate, returnDate) {
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