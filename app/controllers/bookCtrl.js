app.controller('bookCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: "../data/guides.json"
	})
	.then((val) => {
		$scope.books = val.data.guides
		console.log($scope.books)
	})
})
