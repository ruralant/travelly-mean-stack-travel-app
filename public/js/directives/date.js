angular
  .module("TravellyApp")
  .directive("date", date);

function date() {
  return {
    restrict: 'A',
    require: "ngModel",  
    link: (scope, element, attrs, ngModel) => {
      ngModel.$formatters.push((value) => {
        return new Date(value);
      });
    }
  };
}