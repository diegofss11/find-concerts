moduleApp.controller('CreateConcertController', function ($scope, concertService) {
	$scope.pageTitle = "Create Concert";
	$scope.showAlert = false;

	var picker = new Pikaday({ 
		field: $('#datepicker')[0],
		position: 'top left',
		minDate: new Date(),
		format: 'MM/DD/YYYY',
	});

	$('#datetimepicker2').datetimepicker({
		datepicker:false,
		format:'g:i a',
		lang: 'en',
	});
	
	$scope.genderTypes = ["Rock", "Blues", "Country", "Jazz", "Classic", "Popular"];
	
	$scope.addConcert = function(){
		concertService.addConcert($scope.newConcert);
		$scope.showAlert = true;
	}
});