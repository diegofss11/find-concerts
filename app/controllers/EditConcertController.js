moduleApp.controller('EditConcertController', function ($scope, $routeParams, concertService) {
	$scope.pageTitle = "Edit Concerts";
	$scope.isEditButtonVisible = true;

	var picker = new Pikaday({ 
		field: $('#datepicker')[0],
		position: 'top left',
		format: 'MM/DD/YYYY'	
	});

	$('#datetimepicker2').datetimepicker({
		datepicker:false,
		format:'g:i a',
		lang: 'en',
	});

	$scope.showConcert = function(){
		//grab id out of the routerParams
		var concertId = ($routeParams.concertId) ? parseInt($routeParams.concertId) : 0;
		
		$scope.concert = concertService.getConcert(concertId);
	}	

	$scope.editButtonEvent = function(){
		$scope.isEditButtonVisible = false;
	}
	
	$scope.cancelButtonEvent = function(){
		$scope.isEditButtonVisible = true;
	}
	
	$scope.updateConcert = function(){
		var isSaved = concertService.addConcert($scope.concert);
		
		if(isSaved){
			$scope.isEditButtonVisible = true;	
		}
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