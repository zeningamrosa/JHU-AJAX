(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/html/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
