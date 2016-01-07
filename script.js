// Create new module. Include ngRoute to handle routing.
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// Configure routes. Include $locationProvider to remove hashtags from URLs.
scotchApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider

    // Route for home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

    // Route for about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

    // Route for contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });

    // Use HTML History API
    $locationProvider.html5Mode(true);
});



// Create controller and inject $scope
scotchApp.controller('mainController', function ($scope) {

    // Create message to display in view
    $scope.message = 'Welcome to the home page!';
});

scotchApp.controller('aboutController', function ($scope) {
    $scope.message = 'This is the about page.'
});

scotchApp.controller('contactController', function ($scope) {
    $scope.message = 'You have come to the contact page.'
});