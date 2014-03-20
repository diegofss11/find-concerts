moduleApp.controller('SearchConcertController', function ($scope, concertService) {
	$scope.pageTitle = "Search Concerts";
	
	$scope.findAll = function(){
		$scope.concerts = concertService.findAll();		
	}
	
	$scope.detailConcertClick = function(concert){
		$scope.concert = concert;
	}
	
	$scope.searchByAuthor = function(){
		var authorId = FB.getUserID();
		$scope.concerts = concertService.searchByAuthor(authorId);
	}
});