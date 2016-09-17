(function() {
  'use strict';
  describe('description', function() {
    var $state, $location, $rootScope;

    beforeEach(module('app.select'));

    beforeEach(inject(function (_$state_, _$location_, _$rootScope_ , $templateCache) {
      $state=_$state_;
      $rootScope=_$rootScope_;
      $location=_$location_;
      $templateCache.put('select.tpl.html','');
    }));

    it("should go to select page when route is activated", function () {
      $state.go('select');
      $rootScope.$digest();
      expect($state.current.url).toEqual('/select');
    });
  });
}());
