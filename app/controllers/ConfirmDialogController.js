moduleApp.controller('ConfirmDialogController', function($scope,$modalInstance, items, concertService){
	$scope.concertSelected = items;
  	$scope.ok = function () {
    	$modalInstance.close($scope.concertSelected);
  	};
	
	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
 	};
});