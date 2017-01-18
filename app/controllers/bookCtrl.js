app.controller('bookCtrl', function($scope, guideFactory) {
	guideFactory.getGuideData()
	.then((books) => {
		$scope.books = books
	})
})
