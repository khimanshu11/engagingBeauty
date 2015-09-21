angular.module('biotiqueStore')
	.controller('ProductCtrl', ['$scope', '$routeParams', 'ProductFactory',function($scope, $routeParams, ProductFactory) {
		$scope.category = $routeParams.category;
		$scope.subCategory = $routeParams.subCategory;
		$scope.productid = $routeParams.productId;
		$scope.getProductData = function() {
			ProductFactory.getData()
				.then(function(res) {
					$scope.product = ProductFactory.data;
					console.log($scope.products);
				}, function(data) {
					console.log(data);
				})
		}
		$scope.getProductData();
	}])
	.factory('ProductFactory', ['$http', '$q', '$routeParams', function($http, $q, $routeParams) {
		var productInfo = {};
		productInfo.data = {};
		productInfo.getData = function() {
			var deferred = $q.defer();
			deferred.promise = $http.get('../data/singleProductInfo.json')
				.success(function(data) {
					var selectedCat = $routeParams.category,
						selectedSubCat = $routeParams.subCategory,
						productId = $routeParams.productId;
					console.log(selectedSubCat, selectedCat);
					productInfo.data = data[selectedCat][selectedSubCat][productId];
					deferred.resolve();
				})
				.error(function(data) {
					console.log(data);
					deferred.resolve();
				})
			return deferred.promise;
		}
		return productInfo;
	}])