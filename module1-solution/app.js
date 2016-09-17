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
  	var arr = $scope.textin.split(',');

  	$scope.style = {};
    
  	if ($scope.textin == "") {
  		$scope.msg = "Please enter data first";
  		$scope.style.textColor = 'red';
  		$scope.style.validation = 'error';
  	}
  	else if (arr.length > 3) {
  		$scope.msg = "Too much!";
      $scope.style.textColor = 'green';
      $scope.style.validation = 'valid';
    }	else
  	{
  		$scope.msg = "Enjoy!";
      $scope.style.textColor = 'green';
      $scope.style.validation = 'valid'; 
  	}
    
  };
};
  
})();
