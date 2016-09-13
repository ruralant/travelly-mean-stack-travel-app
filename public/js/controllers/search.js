angular
  .module("TravellyApp")
  .controller("SearchController", SearchController);

SearchController.$inject = ["Flights", "$http", "$rootScope", "$state"];
function SearchController(Flights, $http, $rootScope, $state) {
  this.budget = null;
  this.location = null;
  this.departureDate = null;
  this.returnDate = null;
  this.theme = null;

  this.selectTheme = function(theme) {
    this.theme = theme.name;
  }

  this.themes = [{
    name: "Beach",
    image: ""
  },{
    name: "Historic",
    image: ""
  },{
    name: "Mountains",
    image: ""
  },{
    name: "Romantic",
    image: ""
  },{
    name: "Outdoors",
    image: ""
  },{
    name: "Skiing",
    image: ""
  },{
    name: "Theme Park",
    image: ""
  },{
    name: "Shopping",
    image: ""
  },{
    name: "Natural Parks",
    image: ""
  },{
    name: "Disney",
    image: ""
  },{
    name: "Carribean",
    image: ""
  },{
    name: "Gambling",
    image: ""
  }];

  this.airports = [{
    name:"London Heathrow",
    iataCode: "LHR" 
  },{
    name:"London Gatwick",
    iataCode: "LGW" 
  },{
    name:"Manchester",
    iataCode: "MAN" 
  },{
    name:"London Stansted",
    iataCode: "STN" 
  },{
    name:"London Luton",
    iataCode: "LTN" 
  },{
    name:"Edimburgh",
    iataCode: "EDI" 
  },{
    name:"Birmingham",
    iataCode: "BHX" 
  },{
    name:"Glasgow",
    iataCode: "GLA" 
  },{
    name:"Bristol",
    iataCode: "BRS" 
  },{
    name:"Newcastle",
    iataCode: "NCL" 
  },{
    name:"East Midlands",
    iataCode: "EMA" 
  },{
    name:"Belfast International",
    iataCode: "BFS" 
  },{
    name:"London City",
    iataCode: "LCY" 
  },{
    name:"Liverpool",
    iataCode: "LPL" 
  },{
    name:"Aberdeen",
    iataCode: "ABZ" 
  },{
    name:"Leeds Bradford",
    iataCode: "LBA" 
  },{
    name:"Belfast City",
    iataCode: "BHD" 
  },{
    name:"Southampton",
    iataCode: "SOU" 
  },{
    name:"Jersey",
    iataCode: "JER" 
  },{
    name:"Cardiff",
    iataCode: "CWL" 
  },{
    name:"London Southend Airport",
    iataCode: "SEN" 
  }];

  this.search = function() {
    Flights.query(this.budget, this.location, this.departureDate, this.returnDate, this.theme)
    .then(function(results){
      console.log(results);
      $rootScope.$broadcast("searchResults", results);
      $state.go("results");
    });
  }
};