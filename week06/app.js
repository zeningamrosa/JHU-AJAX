(function() {
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope) {
		var menu = null;
		$scope.countMenu = function() {
			menu = $scope.lunchItems;
			// when user did not input anything.
			if (menu === undefined) {
				//console.log("first case");
				$scope.message = "Please enter the data first!";
				
			} else {
				// split the menu
				menu = $scope.lunchItems.split(",");
				// validate the empty spaces and count the real menu
				var numberOfItems = countLunchItems(menu);
				// if (menu.length == 1) {
					
				// 	//console.log("second case: " + menu);
				// 	//remove empty space from the input
				// 	menu = $scope.lunchItems.replace(/ /g,"");
				// 	// when user just input space only
				// 	if (menu === "") {
				// 		$scope.message="Please enter the data first!";
				// 	} else {
				// 		$scope.message="Enjoy!"
				// 	}
				// } else {  //when user's input is more than one
				
				// 	//console.log("third case: " + menu);
				// 	//console.log("Menu length: " + menu.length);
				// 	//when user input less than 4 items
				// 	if (menu.length < 4) {
				// 		$scope.message = "Enjoy!";
				// 	//when user input more than 3 items	
				// 	} else {
				// 		$scope.message = "Too much!"
				// 	}
				// }
				if (numberOfItems === 0) {
					$scope.message="Please enter the data first!";
				} else if (numberOfItems <= 3) {
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!"
				}
			}
			// call the function which can change font & border color
			changeColor($scope.message);
		};

		//change the font color and border color along the message.
		// Enjoy or Too much : green
		// Please enter the data first : red
		function changeColor(msg) {
			if (msg === "Enjoy!" || msg === "Too much!") {
				$scope.fontStyle = "color:green";
				$scope.borderStyle = "border-color:green";
			} else if (msg === "Please enter the data first!") {
				$scope.fontStyle = "color:red";
				$scope.borderStyle = "border-color:red";
			}
		};

		//count lunch menu
		function countLunchItems(items) {
			var count = 0;
			// iterate entire menu
			for (var i=0; i<items.length; i++) {
				//replace space with empty space and result is not equal to empty space
				if(items[i].replace(/ /g,"") != "") {
					//increase count
					count += 1;
				}
			}

			return count;
		};
	};

})();