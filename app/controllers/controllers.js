//This controller retrieves data from the concertService and associates it with the $scope
//The $scope is ultimately bound to the customers view
moduleApp.controller('HomePageController', function ($scope, concertService) {
	
});

moduleApp.controller('CreateConcertController', function ($scope, concertService) {
	$scope.pageTitle = "Create Concert";
	$scope.showAlert = false;
	
	
	$scope.addConcert = function(){
		concertService.addConcert($scope.newConcert);
		$scope.showAlert = true;
	}
});

moduleApp.controller('EditConcertController', function ($scope, $routeParams, concertService) {
	$scope.pageTitle = "Update Concerts";
	$scope.isEditButtonVisible = true;
	
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

moduleApp.controller('SearchConcertController', function ($scope, concertService) {
	$scope.pageTitle = "Search Concerts";
	
	$scope.findAll = function(){
		$scope.concerts = concertService.findAll();
	}
	
	$scope.searchByAuthor = function(){
		var authorId = FB.getUserID();
		$scope.concerts = concertService.searchByAuthor(authorId);
	}
});

moduleApp.controller('LoginController', function ($scope, concertService) {
	$scope.createAccount = function(){
		console.log("Create Account for: " + $scope.email + " "+ $scope.password);
	}
	
	$scope.passwordRecover = function(){
		console.log("Password Recovered for: " + $scope.email);
	}
	
	$scope.logout = function(){
		FB.logout();
		$scope.isLoginButtonVisible = false;
	}
	
	$scope.loginWithFacebook = function(){
		$("body").css("cursor", "wait");
		$.ajaxSetup({ cache: true });
		$.getScript('//connect.facebook.net/en_UK/all.js', function(){
			loginFacebook();
			$scope.userPicture = "";
			$scope.userName = "";
		});
	}
	
	$scope.logoutEvent = function(){
		FB.logout(handleSessionResponse);
		$scope.isLoginButtonVisible = true;
	}
	
	
	function loginFacebook(){
	// initialize the Facebook Connect JS object by calling the init function. It only requires the API key.
	FB.init(
		{
			apiKey:'456155277848170',
			cookie: true
		}
	);

	// get the login status of the current user
	FB.getLoginStatus(handleSessionResponse);
	//handleSessionResponse is the callback function to execute when this session returns a result

	// handle a session response from any of the authorize related calls
	function handleSessionResponse(response) {
		//Pull user’s name from profile table by passing in the user id
		if (response.status != "connected") {
          return;
        }
		// if we have a session, query for the user's profile picture and name
        FB.api(
			{
				method: 'fql.query',
				query: 'SELECT uid, pic, first_name, last_name FROM user where uid =' + FB.getUserID()
			},
			function(response) {
				if(response.error_msg == "" || response.error_msg == undefined){
					var user = response[0];
					$scope.userPicture = user.pic;
					$scope.userName = user.first_name;
					$scope.isLoginButtonVisible = false;
					$("body").css("cursor", "default");
				}
			}
        );		
	}
}

});