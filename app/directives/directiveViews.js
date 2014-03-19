moduleApp.directive('loginPage', function(){
	return {
		restrict: 'E',
		templateUrl: '/app/views/login.html', //loads over AJAX,
		link: function (scope, element) {
			console.log(scope);
			$(document).foundation();
			scope.isLoginButtonVisible = true;
		}
	};
});

moduleApp.directive('userInfo', function() {
    return {
		template: "<img src='{{userPicture}}'> {{userName}}",
	};
});