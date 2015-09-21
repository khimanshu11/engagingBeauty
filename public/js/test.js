var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope, myFactory) {
	// body...
	console.log(myFactory.getData());
});

myApp.factory('myFactory', function(){
	return {
		myData: "This is some data",
		getData : function() {
			// body...
			return this.myData;
		}
	}
})