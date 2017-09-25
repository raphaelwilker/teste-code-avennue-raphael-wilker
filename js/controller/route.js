
 /**
 * @ngdoc overview
 * @name startApp
 */
var startApp = angular.module('startApp',['ngRoute','dataSeverProvider','ngSanitize']);

/**
 * @ngdoc service
 * @name mainRoute
 * 
 * @function
 * Create and manager routes of angular project. 
 *
 * @description
 * Redirect to correct page.
 *
 *
 * 
 */
startApp.config(function($routeProvider){

	$routeProvider
	.when("/:latitude/:longitude", {
        templateUrl : "./view/html/showLocate.html",
        controller: "iframeMapsController"
    })
    .when("/", {
        templateUrl : "./view/html/form.html",
        controller: "formSearch"
    })
    .otherwise({
    	redirectTo: '/'
    })
});