moduleApp.controller('SearchConcertController', function ($scope, $modal, concertService) {
	$scope.pageTitle = "Search Concerts";
	$scope.isGoing = false;
	$scope.findAll = function(){
		$scope.concerts = concertService.findAll();		
	}	
	
	$scope.detailConcertClick = function(concert){
		$scope.concert = concert;
	}

	$scope.goingToConcert = function(isGoingToConcert){
		$scope.isGoing = isGoingToConcert;
	}	
});




