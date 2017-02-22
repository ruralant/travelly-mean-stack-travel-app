angular
  .module("TravellyApp")
  .service("Flights", Flights);

Flights.$inject = ["$http"];
function Flights($http) {

  function padNum(num) {
    if(num < 10) return "0" + num;
    return num;
  }

  function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    return year + "-" + padNum(month) + "-" + padNum(day);
  }

  this.query = function(budget, location, departureDate, returnDate, theme) {
    return $http({
      method: "GET",
      params: {
        budget: budget,
        location: location,
        departureDate: formatDate(departureDate),
        returnDate: formatDate(returnDate),
        theme: theme
      },
      url: "/api/flights"
    })
    .then(function(res) {
      return res.data;
    });
  };
}