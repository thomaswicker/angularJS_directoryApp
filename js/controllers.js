var myNameSpace = angular.module('directoryApp', []);

myNameSpace.controller('MyController', ['$scope', '$http', function MyController($scope, $http) {
	$http.get('js/data.json').success(function(data) {

	$scope.artists = data;

	});

}]);

