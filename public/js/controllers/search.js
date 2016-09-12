angular
  .module("TravellyApp")
  .controller("SearchController", SearchController);

SearchController.$inject = ["SkyScanner"];
function SearchController(SkyScanner) {
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
};

