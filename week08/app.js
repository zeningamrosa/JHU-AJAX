(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
// .directive('foundItems', FoundItems)
.constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    scope: {
      items: '<'
    }
  };

  return ddo;
};

NarrowItDownController.$inject = ['MenuSearchService', '$scope'];
function NarrowItDownController(MenuSearchService, $scope) {

  var list = this;
  var promise = null

  list.found = function (searchTerm) {
    if (searchTerm === undefined) {
      $scope.items = [];
    } else {
      promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      console.log("promise", promise);
      promise.then(function(result) {
        $scope.items = result;
        console.log("result: ", result);
      
      });
    }
  };

  list.removeItem = function (itemIndex) {
    $scope.items.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }). then (function (result) {
      //make empty arrary to save matched menu
      var foundList = [];
      // console.log('result.data: ', result.data);
      // console.log('length: ', result.data.menu_items.length);
      // console.log('first description: ', result.data.menu_items[0].description);
      // process result and only keep items that match
      //var foundItems = function() {
        searchTerm = searchTerm.toLowerCase();
        console.log("searchTerm", searchTerm);
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var description = result.data.menu_items[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
             foundList.push(result.data.menu_items[i]);
             console.log('description: ', description);
          }
        }
        return foundList;
    });
  }
}

})();
