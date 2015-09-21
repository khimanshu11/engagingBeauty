angular.module('biotiqueStore')
	.controller('SubCategoryCtrl', ['$scope', 'SubCategoryFactory', '$routeParams', function($scope, SubCategoryFactory, $routeParams) {
		$scope.category = $routeParams.category;
		$scope.subCategory = $routeParams.subCategory;
		$scope.getProductData = function() {
			SubCategoryFactory.getData()
				.then(function(res) {
					$scope.products = SubCategoryFactory.data;
					console.log($scope.products);
				}, function(data) {
					console.log(data);
				})
		}

		$scope.getProductData();
	}])
	.factory('SubCategoryFactory', ['$http', '$routeParams', '$q', function($http, $routeParams, $q) {
		var subCategoryProducts = {};
		subCategoryProducts.data = {};

		subCategoryProducts.getData = function() {
			var deferred = $q.defer();
			deferred.promise = $http.get('../data/global.json')
				.success(function(data) {
					var selectedCat = $routeParams.category,
						selectedSubCat = $routeParams.subCategory;
					console.log(selectedSubCat, selectedCat);
					subCategoryProducts.data = data[selectedCat][selectedSubCat].products;
					deferred.resolve();
				})
				.error(function(data) {
					console.log(data);
					deferred.resolve();
				})
			return deferred.promise;
		}
		return subCategoryProducts;
	}])