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
	console.log("CONTROLLER "+ $scope);
	$scope.createAccount = function(){
		console.log("Create Account for: " + $scope.email + " "+ $scope.password);
	}
	
	$scope.passwordRecover = function(){
		console.log("Password Recovered for: " + $scope.email);
	}
	
	$scope.loginWithFacebook = function(){
		$("body").css("cursor", "wait");
		$.ajaxSetup({ cache: true });
		$.getScript('//connect.facebook.net/en_UK/all.js', function(){
			loginFacebook($scope);
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

	// log in the user to Facebook.
	/* Notice it has an second argument where you pass in {perms: 'read_stream,publish_stream'}.
	the read_stream lets your site access the user’s stream and display it. The publish_stream lets
	your site post to a user's profile and the user’s friends' streams without prompting the user.
	Some of the user’s info and actions such as posting to the profile would require the user to give permission.

	For more info on permissions: http://wiki.developers.facebook.com/index.php/Extended_permissions
	*/

	$('#login').click(function(){
		$('#login').bind('click', function() {
			FB.login(handleSessionResponse);
		});
	});
	

	// handle a session response from any of the authorize related calls
	function handleSessionResponse(response) {
		//Pull user’s name from profile table by passing in the user id
		if (response.status != "connected") {
          //clearDisplay();
          return;
        }
		// if we have a session, query for the user's profile picture and name
        FB.api(
			{
				method: 'fql.query',
				query: 'SELECT username, pic FROM profile WHERE id=' + FB.getUserID()				
			},
			function(response) {
				if(response.error_msg == "" || response.error_msg == undefined){
					var user = response[0];
					$scope.userPicture = user.pic;
					$scope.userName = user.name;
					//$('#user-info').html('<img src="' + user.pic + '">' + user.name).show('fast');
					$scope.isLoginButtonVisible = false;
					$("body").css("cursor", "default");
				}
			}
        );		
	}
}

});