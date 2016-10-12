(function () {
'use strict';

angular.module('lunchCheck', [])
.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];

function lunchCheckController ($scope) {
  /*
  Do not think a,,b as empty item. There are three items.
  */
  
  $scope.chkAndShow = function () {
	if ($scope.textin == undefined || $scope.textin == ""){
		$scope.msg = "Please enter data first";
		$scope.hocls1 = "brdred";
		$scope.hocls2 = "red";
	}  else {
		
	var arr = $scope.textin.split(',');
	$scope.hocls1 = "brdgreen";
	$scope.hocls2 = "green";
  	//console.log("Ho:" + $scope.textin);
	 
  	if (arr.length > 3) {
  		$scope.msg = "Too much!";
      }	else
  	{
  		$scope.msg = "Enjoy!";
   	}
   }
  };
};
  
})();
