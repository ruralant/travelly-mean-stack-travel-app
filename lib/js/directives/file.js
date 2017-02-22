angular
  .module("TravellyApp")
  .directive("file", file);

file(() => {
  return {
    restrict: 'A',
    require: "ngModel",   
    link: (scope, element, attrs, ngModel) => {
      element.on('change', (e) => {
        ngModel.$setViewValue(e.target.files[0]);
      });
    }
  };
})