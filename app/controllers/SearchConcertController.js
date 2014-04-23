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

	$scope.searchByAuthor = function(){
		//var authorId = FB.getUserID();
		var authorId = 1;
		$scope.concerts = concertService.searchByAuthor(authorId);
	}

	$scope.deleteConcert = function($event, concert){
		$modal.open({
			templateUrl: '/app/views/confirmDialog.html',
			controller: 'ConfirmDialogController',
			resolve: {
    			items: function () {
        			return concert;
    			}
    		}
		}).result.then(function (selectedItem) {
	       concertService.deleteConcert(selectedItem.id);
	    });
	} 
});




