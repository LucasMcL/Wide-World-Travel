app.config(($locationProvider, $routeProvider) => {
	$locationProvider.hashPrefix('')

	$routeProvider
		.when('/', {
			controller: 'bookCtrl',
			templateUrl: '../partials/guide-list.html'
		})
})
