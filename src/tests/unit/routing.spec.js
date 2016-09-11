'use strict';
describe('UI Routing', function() {
  var $state, $location, resolveRoute;
  beforeEach(module('app.routing'));
  //beforeEach(module('ngTemplates'));
  beforeEach(inject(function($injector, $rootScope, $templateCache) {
    $state = $injector.get('$state');
    $location = $injector.get('$location');

    $templateCache.put('views/test.html', '');

    resolveRoute = function() {
      $rootScope.$digest();
    };

  }));
  describe('should load templates', function() {
    it("should go to first when state go is called", function() {
      $state.go('first');
      resolveRoute();
      expect($state.current.url).toEqual('/first');
    });
    it("should go to second when state go is called", function() {
      $state.go('second');
      resolveRoute();
      expect($state.current.url).toEqual('/second');
    });
    it("should go to first when invalid location go is called", function() {
      $location.url('/ddd');
      resolveRoute();
      expect($state.current.url).toEqual('/first');
    });
  });
});
