(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['MenuDataService', 'items'];
function ItemListController(MenuDataService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
