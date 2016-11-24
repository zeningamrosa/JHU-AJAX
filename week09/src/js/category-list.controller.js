(function () {
'use strict';

angular.module('data')
.controller('CategoryListController', CategoryListController);


CategoryListController.$inject = ['MenuDataService', 'allCategories'];
function CategoryListController(MenuDataService, allCategories) {
  var mainlist = this;
  mainlist.allCategories = allCategories;
}

})();
