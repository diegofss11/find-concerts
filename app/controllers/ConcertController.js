moduleApp.controller('ConcertController', function ($scope, $routeParams, $modal, ConcertService) {
	
	$scope.showAlert = false;
	$scope.genderTypes = ["Rock", "Blues", "Country", "Jazz", "Classic", "Popular"];

	$scope.saveConcert = function(){
		var isSaved = ConcertService.saveConcert($scope.concert);
		//$scope.showAlert = true;
		if(isSaved){
			if($scope.isUpdateMode){
				$scope.isEditButtonVisible = true;
			}
			else{
				$scope.concert = {};
			}			
		}
	}

	$scope.showConcert = function(){
		//grab id out of the routerParams
		var concertId = ($routeParams.concertId) ? parseInt($routeParams.concertId) : 0;
		
		$scope.concert = ConcertService.getConcert(concertId);
	}	

	$scope.editButtonEvent = function(){
		$scope.isEditButtonVisible = false;
	}
	
	$scope.cancelButtonEvent = function(){
		$scope.isEditButtonVisible = true;
	}
	
	$scope.searchByAuthor = function(){
		//var authorId = FB.getUserID();
		var authorId = 1;
		$scope.concerts = ConcertService.searchByAuthor(authorId);
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
	       ConcertService.deleteConcert(selectedItem.id);
	    });
	} 	












	$scope.isGoing = false;
	$scope.findAll = function(){
		$scope.concerts = ConcertService.findAll();		
	}	
	
	$scope.detailConcertClick = function(concert){
		$scope.concert = concert;
	}

	$scope.goingToConcert = function(isGoingToConcert){
		$scope.isGoing = isGoingToConcert;
	}	
});