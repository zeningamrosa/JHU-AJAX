(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject=['$http'];
function MenuDataService ($http) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: "http://davids-restaurant.herokuapp.com/categories.json"
    });

    response.then(function(result) {
      console.log("Success in getAllCategories");
      console.log("result: ", result);
      return result;
    })
    .catch(function(error) {
      console.log("Error in getAllCategories");
    })


  };

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
          method: "GET",
          url: "http://davids-restaurant.herokuapp.com/menu_items.json",
          params: {
            category: categoryShortName
          }
        });

    response.then(function(result) {
      console.log("Success in getItemsForCategory");
      console.log("result: ", result);
      return result;
    })
    .catch(function(error) {
      console.log("Error in getItemsForCategories");
    })
  };

};

})();
