'use strict';


describe('myApp.view1 module', function () {

    beforeEach(module('myApp.view1'));


    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('view controller', function() {
        it('should', function() {
            var controller = $controller('View1Ctrl');
            expect(controller).to.be.an('object');
        });
    });
});
