(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyList();

  //move the itme to bought list and remove from to buy list
  toBuyList.moveToBoughtList = function (name, quantity, index) {
    ShoppingListCheckOffService.moveToBoughtList(name, quantity);
    ShoppingListCheckOffService.removeItem(index);
  };

  // toBuyList.isEmpty = ShoppingListCheckOffService.isToBuyListEmpty();

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtList();

  // boughtList.isEmpty = ShoppingListCheckOffService.isBoughtListEmpty();
}

function ShoppingListCheckOffService() {
  var service = this;

  // make to buy list
  var toBuyList = [
    {
      name:"milk", quantity:2
    },
    {
      name:"egg", quantity:24
    },
    {
      name:"apple", quantity:4
    },
    {
      name:"chicken breast", quantity:2
    },
    {
      name:"Nacho snack", quantity:1
    },
    {
      name:"kitchen towel", quantity:12
    }
  ];

  //make empty arrary to save already bought list
  var boughtList = [];

  service.moveToBoughtList = function (itemName, quantity) {
    var item = {
      name: itemName, quantity: quantity
    };

    boughtList.push(item);
  };

  //return buyList;
  service.getToBuyList=function() {
    return toBuyList;
  };

  //return already bought list
  service.getBoughtList=function() {
    return boughtList;
  };

  service.removeItem = function (itemIndex) {
    toBuyList.splice(itemIndex, 1);
  };

  // service.isToBuyListEmpty = function() {
  //   console.log("ToBuyList length: ", toBuyList.length);
  //   console.log("toBuyList empty?", toBuyList.length == 0);
  //   return toBuyList.length == 0;
  // }

  // service.isBoughtListEmpty = function() {
  //   console.log("boughtList length: ", boughtList.length);
  //   console.log("boughtLis empty?", boughtList.length == 0);
  //   return boughtList.length == 0;
  // }

}

})();
