(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/html/categories.template.html',
  bindings: {
    allCategories: '<'
  }
});

})();
