angular
  .module("TravellyApp")
  .directive("date", date);

function date() {
  return {

    restrict: 'A',

    require: "ngModel",
    
    link: function(scope, element, attrs, ngModel) {
      ngModel.$formatters.push(function(value) {
        return new Date(value);
      });
    }
  }
}