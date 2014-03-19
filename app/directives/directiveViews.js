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
		link: function(scope,elem,attrs){
			elem.bind('click',function(){
				elem.css('background-color','white');
				scope.$apply(function(){
					scope.color="white";
				});
			});  
		}			
	};
});