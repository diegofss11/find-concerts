moduleApp.controller('CreateConcertController', function ($scope, concertService) {
	$scope.pageTitle = "Create Concert";
	$scope.showAlert = false;
	
	$scope.genderTypes = ["Rock", "Blues", "Country", "Jazz", "Classic", "Popular"];
	
	$scope.addConcert = function(){
		concertService.addConcert($scope.newConcert);
		$scope.showAlert = true;
	}
});