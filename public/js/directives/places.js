angular
  .module("TravellyApp")
  .directive("places", places);

function places() {
  return {
    restrict: 'A',
    require: "ngModel",
    link: (scope, element, attrs, ngModel) => {
      let autocomplete = new google.maps.places.Autocomplete(element[0], { types: ['geocode'] });

      autocomplete.addListener('place_changed', () => {
        let place = autocomplete.getPlace();
        ngModel.$setViewValue(place.formatted_address);
      });
    }
  };
}