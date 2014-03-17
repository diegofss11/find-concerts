//This controller retrieves data from the concertService and associates it with the $scope
//The $scope is ultimately bound to the customers view
app.controller('HomePageController', function ($scope, concertService) {
	
});

app.controller('CreateConcertController', function ($scope, concertService) {
	$scope.pageTitle = "Create Concert";
	
	$scope.addConcert = function(){
		concertService.addConcert($scope.newConcert);
	}
});

app.controller('EditConcertController', function ($scope, $routeParams, concertService) {
	$scope.pageTitle = "Update Concerts";
	$scope.isCancelButtonVisible = false;
	$scope.isUpdateButtonVisible = false;
	$scope.isEditButtonVisible = true;
	
	$scope.showConcert = function(){
		//grab id out of the routerParams
		var concertId = ($routeParams.concertId) ? parseInt($routeParams.concertId) : 0;
		
		$scope.concert = concertService.getConcert(concertId);
	}	

	$scope.editButtonEvent = function(){
		$scope.isEditButtonVisible = false;
		$scope.isUpdateButtonVisible = true;
		$scope.isCancelButtonVisible = true;
		
		//disablingFields(false);
	}
	
	$scope.cancelButtonEvent = function(){
		/*$(this).hide();
		$('#updateButton').hide();
		$('#editButton').show();
		disablingFields(true);*/
		
		$scope.isCancelButtonVisible = false;
		$scope.isUpdateButtonVisible = false;
		$scope.isEditButtonVisible = true;
		
		
	}
	
	$scope.updateButtonEvent = function(){
		/*$(this).hide();
		$('#cancelButton').hide();
		$('#editButton').show();
		disablingFields(true);*/
		
		$scope.isUpdateButtonVisible = false;
		$scope.isCancelButtonVisible = false;
		$scope.isEditButtonVisible = true;
		
	}    
});

app.controller('SearchConcertController', function ($scope, concertService) {
	$scope.pageTitle = "Search Concerts";
	
	
	$scope.findAll = function(){
		$scope.concerts = concertService.findAll();
	}
	
	$scope.searchByAuthor = function(){
		var authorId = FB.getUserID();
		$scope.concerts = concertService.searchByAuthor(authorId);
	}
});

app.controller('LoginController', function ($scope, concertService) {
	
	$scope.init = function(){
		$("#loginDiv").load("/app/views/login.html", function(){
			$(document).foundation();
			$scope.isLoginButtonVisible = true;
			$scope.isLogoutButtonVisible = false;
		});	
	}
	
	$scope.createAccount = function(){
		console.log("Create Account for: " + $scope.email + " "+ $scope.password);
	}
	
	$scope.passwordRecover = function(){
		console.log("Password Recovered for: " + $scope.email);
	}
	
	$scope.facebookLoginEvent = function(){
		$("body").css("cursor", "wait");
		$.ajaxSetup({ cache: true });
		$.getScript('//connect.facebook.net/en_UK/all.js', function(){
			loginFacebook($scope);
		});
	}
	
	$scope.logoutEvent = function(){
		FB.logout(handleSessionResponse);
		$scope.isLogButtonVisible = true;
		$scope.isLogoutButtonVisible = false;
	}
});