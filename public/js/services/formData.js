angular
  .module("TravellyApp")
  .factory("formData", formData);

function formData() {
  return {
    transform: (data) => {
      let formData = new FormData();
      angular.forEach(data, (value, key) => {
        if(value._id) value = value._id;
        if(!key.match(/^\$/)) formData.append(key, value);
      });
      return formData;
    }
  };
}