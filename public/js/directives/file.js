angular
  .module('travellyApp')
  .directive('file', file);

function file() {
  return {

    restrict: 'A',

    require: "ngModel",
    
    link: function(scope, element, attrs, ngModel) {
      element.on('change', function(e) {
        ngModel.$setViewValue(e.target.files[0]);
      });
    }
  }
}