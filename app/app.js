var moduleApp = angular.module('concertApp', ['ngRoute', 'mm.foundation']);

moduleApp.directive("datepicker", function () {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, elem, attrs, ngModelCtrl) {
      var updateModel = function (dateText) {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(dateText);
        });
      };
      var options = {
        dateFormat: "dd/mm/yy",
        onSelect: function (dateText) {
          updateModel(dateText);
        }
      };
      elem.datepicker(options);
    }
  }
});

//This configures the routes and associates each route with a view and a controller
moduleApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
    //$locationProvider.html5Mode(true);
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$routeProvider
        .when('/',
            {
                templateUrl: '/app/views/MainView.html',
                title: "Find Concerts App",
                mainImageUrl: '/contents/img/concertIcon.png',
                footImageUrl: '/contents/img/EventBackGround.png'
			})
		.when('/createConcert',
            {
                controller: 'ConcertController',
                templateUrl: '/app/views/ConcertForm.html',
				title: 'Create Concert',
                isUpdateMode: false,
                buttonSubmitText: "Save"
            })
        .when('/editConcert/:concertId',
            {
                controller: 'ConcertController',
                templateUrl: '/app/views/ConcertForm.html',
				title: 'Edit Concert',
                isUpdateMode: true,
                isReadOnly: true,
                buttonSubmitText: "Update"
            })
		.when('/editConcert/',
            {
                controller: 'ConcertController',
                templateUrl: '/app/views/DetailConcertsView.html',
				title: 'Concerts View'
            })
        .when('/searchConcert',
            {
                controller: 'ConcertController',
                templateUrl: '/app/views/SearchConcertsView.html',
				title: 'Search Concert'
            })		
        .otherwise({ redirectTo: '/' });
})
.run(function($rootScope) { //run everytime the page is load
    $rootScope.$on('$viewContentLoaded', function () {
      $(document).foundation();
    });

    $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
        //Change page title, based on Route information
        $rootScope.pageTitle = previousRoute.title;
        $rootScope.isUpdateMode = previousRoute.isUpdateMode;  
        $rootScope.isReadOnly = previousRoute.isReadOnly; 
        $rootScope.buttonSubmitText = previousRoute.buttonSubmitText;
        $rootScope.mainImageUrl = previousRoute.mainImageUrl;
        $rootScope.footImageUrl = previousRoute.footImageUrl;
    });
});



