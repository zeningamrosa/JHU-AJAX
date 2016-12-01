(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuCategories', '$scope', 'UserInfoService'];
function SignupController(menuCategories, $scope, UserInfoService) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;

  $ctrl.submit = function () {
    $ctrl.completed = true;
    //console.log("firstName in sign controller: ", $scope.user.firstname);
    UserInfoService.saveFirstName($scope.user.firstname);
    //console.log("lastName in sign controller: ", $scope.user.firstname);
    UserInfoService.saveLastName($scope.user.lastname);
    //console.log("email in sign controller: ", $scope.user.email);
    UserInfoService.saveEmail($scope.user.email);
    //console.log("phone in sign controller: ", $scope.user.phone);
    UserInfoService.savePhone($scope.user.phone);
    //console.log("firstName in sign controller: ", $scope.user.favoriteDish);
    UserInfoService.saveFavorite($scope.user.favoriteDish);

    UserInfoService.makeEnable();
  }
}



})();
