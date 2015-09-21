'use strict';
(function() {
	
	var app = angular.module('biotiqueStore', ['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl: 'homepage.html'
		})
		.when('/sections/:category/:subCategory',{
			templateUrl:'sections.html',
			controller: 'SubCategoryCtrl'
		})
		.when('/product/:category/:subCategory/:productId',{
			templateUrl:'product.html',
			controller: 'ProductCtrl'
		}).     
		otherwise({
			redirectTo: '/'
		});
	}])
})();
