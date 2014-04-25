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
                controller: 'HomePageController',
                templateUrl: '/app/views/mainView.html'
			})
		.when('/createConcert',
            {
                controller: 'CreateConcertController',
                templateUrl: '/app/views/createConcertView.html',
				title: 'Create'
            })
        .when('/editConcert/:concertId',
            {
                controller: 'EditConcertController',
                templateUrl: '/app/views/concertDetailView.html',
				title: 'Edit'
            })
		.when('/editConcert/',
            {
                controller: 'EditConcertController',
                templateUrl: '/app/views/editConcertView.html',
				title: 'Edit'
            })
        .when('/searchConcert',
            {
                controller: 'SearchConcertController',
                templateUrl: '/app/views/searchConcertView.html',
				title: 'Search'
            })		
        .otherwise({ redirectTo: '/' });
})
.run(function($rootScope) { //run everytime the page is load
    $rootScope.$on('$viewContentLoaded', function () {
      $(document).foundation();
    });
  });

