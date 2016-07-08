angular.module('performance-js')
	.controller('Global', Global); 


function Global($scope, performanceTest) {
	var vm = this;
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
	vm.formData = {
		urls: [urlInput],
		rcs: [rcInput],
		headers: [headerInput]
	};

	vm.runTest = runTest;
	vm.testResults;
	vm.errors = [];

	vm.addInput = addInput;
	vm.stringify = stringify;

	function runTest() {
		return performanceTest.run(vm.formData)
			.then(function(response) {
				vm.testResults = response;
			}).catch(function(response) {
				vm.errors.push(response);
			});
	}

	function addInput(param) {
		switch(param) {
			case 'url':
				vm.formData.urls.push({
					value: 0,
					placeholder: 'URL'
				});
				break;
			case 'rc':
				vm.formData.rcs.push({
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
				vm.formData.headers.push({
					value: '',
					placeholder: 'Header'
				});
				break;
			default:
				console.error('void addInput');
				break;
		};
	};

	function stringify(param) {
		return JSON.stringify(param, undefined, 2);
	}
}
