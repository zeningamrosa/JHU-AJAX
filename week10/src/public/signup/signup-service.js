(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


SignupService.$inject = ['$scope'];
function SignupService($http) {
  var service = this;

  this.saveFirstName = function(firstname) {
    this.firstName = firstname
  }

  service.getUserInfo () {
    getFirstName = function() {
      return this.firstname;
    };

    service.getLastName = function() {
      return $scope.user.lastname;
    }

    service.getEmail = function() {
      return $scope.user.email;
    };

    service.getPhone = function() {
      return $scope.user.phone;
    }

    service.getFavoriteDish = function() {
      return $scope.user.favoritedish;
    };
  }
}


})();
