moduleApp.directive('loginPage', function(){
	return {
		restrict: 'E',
		templateUrl: '/app/views/login.html', //loads over AJAX,
		scope: true,
		link: function (scope, element) {
			$(document).foundation();
			scope.isLoginButtonVisible = true;
		}
	};
});