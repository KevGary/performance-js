angular.module('performance-js')
	.factory('performanceTest', performanceTest);

function performanceTest($http) {
	return {
		run : run
	}

	function run(formData) {
		return $http({
		  method: 'POST',
		  url: '/api/performance/run',
		  data: formData
		}).then(function successCallback(response) {
			console.log(response);
	  }, function errorCallback(response) {
	    console.log(response);
	  });
	}
}