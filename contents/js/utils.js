$( document ).ready(function() {
    init();
});

function init(){
	//injecting Login page in index.html
	$("#loginDiv").load("/app/views/login.html", function(){
		$(document).foundation();
		initElementVisibilities();
	});		
	initEventListeners();	
}

function initElementVisibilities(){
	$('#logoutButton').hide();
}

function initEventListeners(){
	$(document).on('click', '#loginFacebookLink', function() {
		$("body").css("cursor", "wait");
		$.ajaxSetup({ cache: true });
		$.getScript('//connect.facebook.net/en_UK/all.js', function(){
			loginFacebook();
		});
	});		
	
	$(document).on('click', '#logoutButton', function() {
		FB.logout(handleSessionResponse);
		$('#loginButton').show();
		$(this).hide();
	});
}

function loginFacebook(){
	// initialize the Facebook Connect JS object by calling the init function. It only requires the API key.
	FB.init({apiKey:'456155277848170'});

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
            queries: {
				query1:  'SELECT pic FROM profile WHERE id=' + FB.getUserID(),
				query2:  'SELECT first_name FROM profilefirst_name WHERE id=' + FB.getUserID()
			}
          },
          function(response) {
            var user = response[0];
            $('#user-info').html('<img src="' + user.pic + '">' + user.name).show('fast');
			$('#logoutButton').show();
			$('#loginButton').hide();
			$("body").css("cursor", "default");
          }
        );		
	}
}


