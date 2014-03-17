var app = angular.module('concertApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'HomePageController',
                templateUrl: '/app/views/mainView.html'
            })
		.when('/createConcert',
            {
                controller: 'CreateConcertController',
                templateUrl: '/app/views/createConcertView.html'
            })
        .when('/editConcert/:concertId',
            {
                controller: 'EditConcertController',
                templateUrl: '/app/views/concertDetailView.html'
            })
		.when('/editConcert/',
            {
                controller: 'EditConcertController',
                templateUrl: '/app/views/editConcertView.html'
            })
        .when('/searchConcert',
            {
                controller: 'SearchConcertController',
                templateUrl: '/app/views/searchConcertView.html'
            })				
        .otherwise({ redirectTo: '/' });
});