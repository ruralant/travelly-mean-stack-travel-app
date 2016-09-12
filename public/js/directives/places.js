angular
  .module("TravellyApp")
  .directive("places", places);

function places() {
  return {
    restrict: 'A',
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {
      var autocomplete = new google.maps.places.Autocomplete(element[0], { types: ['geocode'] });

      autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        ngModel.$setViewValue(place.formatted_address);
      });
    }
  }
}