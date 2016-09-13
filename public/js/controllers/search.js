angular
  .module("TravellyApp")
  .controller("SearchController", SearchController);

SearchController.$inject = [];
function SearchController() {
  this.budget = null;
  this.location = null;
  this.departureDate = null;
  this.returnDate = null;

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
  }];

  this.selectLocation = function(airport) {
    this.airport = airport.name;
  }

  this.airports = [{
    name:"London Heathrow",
    IataCode: "LHR" 
  },{
    name:"London Gatwick",
    IataCode: "LGW" 
  },{
    name:"Manchester",
    IataCode: "MAN" 
  },{
    name:"London Stansted",
    IataCode: "STN" 
  },{
    name:"London Luton",
    IataCode: "LTN" 
  },{
    name:"Edimburgh",
    IataCode: "EDI" 
  },{
    name:"Birmingham",
    IataCode: "BHX" 
  },{
    name:"Glasgow",
    IataCode: "GLA" 
  },{
    name:"Bristol",
    IataCode: "BRS" 
  },{
    name:"Newcastle",
    IataCode: "NCL" 
  },{
    name:"East Midlands",
    IataCode: "EMA" 
  },{
    name:"Belfast International",
    IataCode: "BFS" 
  },{
    name:"London City",
    IataCode: "LCY" 
  },{
    name:"Liverpool",
    IataCode: "LPL" 
  },{
    name:"Aberdeen",
    IataCode: "ABZ" 
  },{
    name:"Leeds Bradford",
    IataCode: "LBA" 
  },{
    name:"Belfast City",
    IataCode: "BHD" 
  },{
    name:"Southampton",
    IataCode: "SOU" 
  },{
    name:"Jersey",
    IataCode: "JER" 
  },{
    name:"Cardif",
    IataCode: "CWL" 
  },{
    name:"London Southend Airport",
    IataCode: "Sen" 
  }]
};