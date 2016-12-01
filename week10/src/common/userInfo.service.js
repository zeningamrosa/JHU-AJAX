(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


UserInfoService.$inject = [];
function UserInfoService() {
  var service = this;
  service.enable = false;

  service.saveFirstName = function (firstName) {
    service.firstName = firstName;
    //console.log("firstName in userinfo service: ", firstName)
  }

  service.saveLastName = function (lastName) {
    service.lastName = lastName;
    //console.log("lastName in userinfo service: ", lastName)
  }

  service.saveEmail = function (email) {
    service.email = email;
    //console.log("email in userinfo service: ", email)
  }

  service.savePhone = function (phone) {
    service.lastName = phone;
    //console.log("phone in userinfo service: ", phone)
  }

  service.saveFavorite = function (favorite) {
    service.Favorite = favorite;
    //console.log("Favorite in userinfo service: ", firstName)
  }

  service.makeEnable = function() {
    service.enable = true;
  }

  service.getFirstName = function () {
    return service.firstName;
  }

  service.getLastName = function () {
    return service.lastName;
  }

  service.getEmail = function () {
    return service.email;
  }

  service.getPhone = function () {
    return service.lastName;
  }

  service.getFavorite = function () {
    return service.Favorite;
  }

  service.isEnabled = function() {
    return service.enable;
  }

}

})();
