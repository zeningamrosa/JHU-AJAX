(function () {

angular.module('MenuApp')
.controller("MenuAppController", MenuAppController);

MenuAppController.$inject = ['MenuDataService'];
function MenuAppController(MenuDataService) {
  var menu = this;

  var promise = MenuDataService.getAllCategories();

  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went wrong.");
  });

  menu.logMenuItems = function (shortName) {
    var promise = MenuDataService.getMenuForCategory(shortName);

    promise.then(function (response) {
      //console.log("response.data.menu_items[0].description: ", response.data.menu_items[0].description);
	console.log("response.data: ", response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}

})();
