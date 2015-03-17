'use strict';

describe('View2Controller', function() {
    beforeEach(module('myApp.view2'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('view controller', function() {
        it('should', function() {
            var $scope = {};
            var controller = $controller('View2Ctrl',{$scope:$scope});
            expect(controller).to.be.an('object');
            debugger;
            var result=$scope.test()
            expect(result).to.be.equal('test');
        });
    });
});