"use strict";
describe("Configuration", function () {
    var $state, $injector;

    var state='login';
    beforeEach(function () {
        module('app.config');
        inject(function(_$state_, _$injector_, $templateCache) {
            $state = _$state_;
            $injector = _$injector_;

            $templateCache.put('template.html', '');
        })
    });


    it("should response to a URL", function () {
        expect($state.href(state)).toEqual('/login');
    });
});

