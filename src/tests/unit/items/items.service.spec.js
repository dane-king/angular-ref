(function() {
  'use strict';
  describe('Item Service', function() {
    var itemService,
      $httpBackend,
      resolveRequest,
      constants;

    beforeEach(module('app.items', 'app.common'));

    beforeEach(inject(function($injector) {
      itemService = $injector.get('itemService');
      $httpBackend = $injector.get('$httpBackend');
      var $rootScope = $injector.get('$rootScope');

      var usda_url = $injector.get('usda_url');

      constants = {
        url: usda_url
      };

      resolveRequest=function(){
        $httpBackend.flush();
        $rootScope.$digest();
      };
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('Search', function() {
      beforeEach(function() {
        $httpBackend.expectGET(constants.url).respond({
          "list": {
            "q": "searh term",
            "sr": "28",
            "ds": "any",
            "start": 0,
            "end": 17,
            "total": 17,
            "group": "",
            "sort": "n",
            "item": [item1]
          }
        });
      });

      it("should get a list of items when search", function() {
        var promise = itemService.search('bread');
        resolveRequest();
        expect(itemService.getItems()).toEqual([item1]);
      });
    });

    var item1 = {
      "offset": 0,
      "group": "Group Name",
      "name": "Item Name, UPC: 123456789012",
      "ndbno": "45044694",
      "ds": "BL"
    };
  });
}());
