angular
  .module("TravellyApp")
  .service("Flights", Flights);

Flights.$inject = ["$http"];
Flights(($http) => {

  padNum((num) => {
    if(num < 10) return "0" + num;
    return num;
  });

  formatDate((date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return year + "-" + padNum(month) + "-" + padNum(day);
  });

  this.query = (budget, location, departureDate, returnDate, theme) => {
    return $http({
      method: "GET",
      params: {
        budget,
        location,
        departureDate: formatDate(departureDate),
        returnDate: formatDate(returnDate),
        theme
      },
      url: "/api/flights"
    })
    .then((res) => {
      return res.data;
    });
  };
});