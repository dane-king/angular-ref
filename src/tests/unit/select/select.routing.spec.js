(function() {
  'use strict';
  describe('Select Routing', function() {
    var $state, $location, $rootScope, itemService;

    beforeEach(module('app.select'));

    //example of mocking provider
    beforeEach(module('app.items', function($provide) {
      $provide.value('itemService', itemService={getItems:angular.noop,stub:angular.noop});
    }));

    beforeEach(inject(function(itemService, _$state_, _$location_, _$rootScope_, $templateCache) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $location = _$location_;

      spyOn(itemService, "getItems");

      $templateCache.put('views/select.tpl.html', '');
    }));

    it("should go to select page when route is activated", function() {
      $state.go('select');
      $rootScope.$digest();
      expect($state.current.url).toEqual('/select');
    });
    it("should call get item service ", function() {
      $state.go('select');
      $rootScope.$digest();
      expect(itemService.getItems).toHaveBeenCalled();
    });
  });
}());
