(function(){
"use strict"

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['$scope','UserInfoService'];
function MyinfoController ($scope, UserInfoService) {
  var $ctrl = this;

  $scope.show = {};

  console.log("firstNme in myinfo controller: " , UserInfoService.getFirstName());
console.log("last in myinfo controller: " , UserInfoService.getLastName());
console.log("firstNme in myinfo controller: " , UserInfoService.getEmail());
console.log("firstNme in myinfo controller: " , UserInfoService.getPhone());
console.log("firstNme in myinfo controller: " , UserInfoService.getFavorite());
console.log("firstNme in myinfo controller: " , UserInfoService.isEnabled());

  $scope.show.firstname = UserInfoService.getFirstName();
  $scope.show.lastname = UserInfoService.getLastName();
  $scope.show.email = UserInfoService.getEmail();
  $scope.show.phone = UserInfoService.getPhone();
  $scope.show.favoriteDish = UserInfoService.getFavorite();
  $scope.show.enable = UserInfoService.isEnabled();

  $ctrl.enable = UserInfoService.isEnabled();

  // $ctrl.lastName = userInfo.getLastName;
  // $ctrl.email = userInfo.getEmail;
  // $ctrl.phone =  userInfo.getPhone;
  // $ctrl.favoritedish = userInfo.getFavoriteDish;
}

})();
