angular
  .module("TravellyApp")
  .service("SkyScanner");

// SkyScanner API GET request
SkyScanner.$inject = ["$http"];
function SkyScanner($http) {
  this.getFlights = function(location, departureDate, returnDate) {
    return $http({
      method: "GET",
      data: {
        apiKey: "an248568374537872172131260545280"
      },
      url: "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/GB/GBP/en-GB/" + location + "/anywhere/" + departureDate + "/" + returnDate;
    })
    .then(function(res) {
      return res.data;
    });
    console.log(res.data);
  }
}