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

moduleApp.directive('goBack', function() {
    return {
        template: "<a href='#'><i class='fi-arrow-left size-24'></i></a>",
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

moduleApp.directive("datepicker", function () {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, elem, attrs, ngModelCtrl) {
      var updateModel = function (dateText) {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(dateText);
          scope.this.concert.date = (dateText);
        });
      };
      var options = {
        dateFormat: "mm/dd/yy",
        onSelect: function (dateText) {
          updateModel(dateText);
        }
      };
      elem.datepicker(options);
    }
  }
});