var app = angular.module('customersApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/createConcert',
            {
                controller: 'CreateConcertController',
                templateUrl: '/app/views/createConcertView.html'
            })
        
        .when('/editConcert/:eventID',
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