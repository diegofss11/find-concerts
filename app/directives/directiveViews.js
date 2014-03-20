moduleApp.directive('loginPage', function(){
	return {
		restrict: 'E',
		templateUrl: '/app/views/login.html', //loads over AJAX,
		link: function (scope, element) {
			scope.isLoginButtonVisible = true;
		}
	};
});

moduleApp.directive('userInfo', function() {
    return {
		template: "<img src='{{userPicture}}'> {{userName}}",
	};
});

moduleApp.directive('revealModal', function (){
   return function(scope, elem, attrs) {
     scope.$watch(attrs.revealModal, function(val) {
        if(val) {           
           elem.trigger('reveal:open');
        } else {
           elem.trigger('reveal:close');
        }
     });
     elem.reveal();
   }
});