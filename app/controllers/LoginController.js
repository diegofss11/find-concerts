/*moduleApp.controller('LoginController', function ($scope, concertService) {
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
		//loading a javascript in the server and then execute it
		$.ajax({
  			url: '//connect.facebook.net/en_UK/all.js',
  			dataType: "script",

  			success: function(){
  				loginFacebook();
  				$scope.userPicture = "";
				$scope.userName = "";
  			}
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
});*/