(function() {
  'use strict';
  describe('Item Service', function() {
    var itemsService;
    beforeEach(module('app.items','app.common'));

    beforeEach(inject(function (_itemsService_, $httpBackend, usda_url) {
      itemsService=_itemsService_;
      $httpBackend.whenGET(usda_url).respond('');
    }));

    it("should get a list of items when search", function () {
      var promise=itemsService.search('bread');
      expect(promise).toBeDefined();
    });

  });
}());
