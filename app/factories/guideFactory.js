app.factory('guideFactory', function($http) {
	return {
		getGuideData: function() {
			return $http({
				method: "GET",
				url: "../data/guides.json"
			})
			.then((responseObj) => {
				console.log("responseObj.data.guides", responseObj.data.guides)
				return responseObj.data.guides
			})
		}
	}
})
