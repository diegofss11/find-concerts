//This controller retrieves data from the concertService and associates it with the $scope
//The $scope is ultimately bound to the customers view
app.controller('HomePageController', function ($scope, concertService) {

});

app.controller('CreateConcertController', function ($scope, concertService) {
	$scope.addConcert = function(){
		concertService.addConcert($scope.newConcert);
	}
});

app.controller('EditConcertController', function ($scope, $routeParams, concertService) {
	$scope.concerts = [];
	
	//grab id out of the routerParams
	var concertId = ($routeParams.concertId) ? parseInt($routeParams.concertId) : 0;
	
	if(concertId != 0){
		//findAll
		$scope.concerts = concertService.findAll();
	}
	else{
		$scope.concerts = concertService.getConcert(concertId);
	}
    
	    
});

app.controller('SearchConcertController', function ($scope, concertService) {
	$scope.findAll = function(){
		$scope.concerts = concertService.findAll();
	}
	
	$scope.searchBy = function(){
		$scope.concerts = concertService.searchBy($scope.concert);
	}
});