(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/html/home.template.html'
  })

  // Categories Page
  .state('categories', {
    url: '/category-list',
    templateUrl: 'src/html/categories.template.html',
    controller: 'CategoryListController as categoryList',
    resolve: {
      allCategories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }

  })

  // Menu items page
  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/html/items.template.html',
    controller: "ItemsController as itemList",
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItemsForCategory(shortName);
      }]
    }

  });

}
})();
