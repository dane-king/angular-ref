'use strict';
describe('Dashboard', function() {
	beforeEach(module("app.login"));

	var  $scope, controller;
	beforeEach(inject(function($rootScope, $controller){
		$scope=$rootScope.$new();
		controller=$controller();
	}));

	xit('should show person name', function() {
		expect($scope.firstName).toBe('Joe');
	});
});
