app.controller('Global', function($scope) {
	//init
	// $scope.nUrls = 1;
	// $scope.nRCs = 1;

	//populate array of n length
	// $scope.populateArray = function(num) {
	// 	return new Array(num);
	// }
	var urlInput = {
		value: '',
		placeholder: 'URL'
	};
	var rcInput = {
		request: {
			value: 0,
			placeholder: 'req'
		},
		concurrency: {
			value: [],
			placeholder: 'curr'
		}
	};
	var headerInput = {
		value: '',
		placeholder: 'Header'
	};

	$scope.formData = {
		urls: [urlInput],
		rcs: [rcInput],
		headers: [headerInput]
	};
	$scope.addInput = function(param) {
		switch(param) {
			case 'url':
				$scope.formData.urls.push({
					value: 0,
					placeholder: 'URL'
				});
				break;
			case 'rc':
				$scope.formData.rcs.push({
					request: {
						value: 0,
						placeholder: 'req'
					},
					concurrency: {
						value: [],
						placeholder: 'curr'
					}
				});
				break;
			case 'header':
				$scope.formData.headers.push({
					value: '',
					placeholder: 'Header'
				});
				break;
			default:
				console.error('void addInput');
				break;
		};
	};

	$scope.stringify = function(param) {
		return JSON.stringify(param, undefined, 2);
	}
});