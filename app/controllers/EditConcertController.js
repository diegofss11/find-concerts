moduleApp.controller('EditConcertController', function ($scope, $routeParams, concertService) {
	$scope.pageTitle = "Update Concerts";
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
	
	$scope.updateButtonEvent = function(){
		$scope.isEditButtonVisible = true;
	}  
	
});