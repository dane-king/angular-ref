(function() {
  'use strict';
  describe('Routing', function() {
    var mockTemplates, goTo, $state;

    beforeEach(module('app.common'));

    beforeEach(inject(function($injector) {
      var $rootScope = $injector.get('$rootScope'),
        $templateCache = $injector.get('$templateCache'),
        $location = $injector.get('$location');

      $state = $injector.get('$state');

      mockTemplates = function(url, template) {
        $templateCache.put(url, template || '');
      };
      goTo = function(page) {
        $location.url(page);
        $rootScope.$digest();
      };
    }));

    describe('Otherwise`', function() {
      beforeEach(function () {
        mockTemplates('notFound.tpl.html');
      });

      it("should go to 404 when not page is not found", function() {
        goTo('invalidPage');
        expect($state.current.name).toEqual('404');
      });

    });
  });
}());
