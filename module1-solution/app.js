(function () {
'use strict';

angular.module('lunchCheck', [])
.controller('lunchCheckController', lunchCheckController);

lunchcheckController.$inject = ['$scope'];

function lunchCheckController ($scope) {
  /*
  Do not think a,,b as empty item. There are three items.
  */
  
  $scope.chkAndShow = function () {
  	var arr = $scope.textin.split(',');

  	var elem = document.querySelector("#lunch-menu");

	var elem2 = document.querySelector("#hoid");

  	if ($scope.textin == "") {
  		$scope.msg = "Please enter data first";
  		elem.style.borderColor = "red";
  		elem2.style.color = "red";
  	}
  	else if (arr.length > 3) {
  		$scope.msg = "Too much!";
  		elem.style.borderColor = "green";
  		elem2.style.color = "green";
  	} else
  	{
  		$scope.msg = "Enjoy!";
  		elem.style.borderColor = "green";
  		elem2.style.color = "green";
  	}
    
  };
};
  
})();
