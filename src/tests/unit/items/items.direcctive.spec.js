(function() {
  'use strict';
  describe('Item Directive', function() {
    var scope, element, item = {
      "offset": 0,
      "group": "Group Name",
      "name": "Item Name, UPC: 123456789012",
      "ndbno": "45044694",
      "ds": "BL"
    };
    beforeEach(module('app.items'));
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      scope.item=item;
      element='<dk-item data-item="item"/>';
      element = $compile(element)(scope);
      scope.$digest();
    }));
    it("should populate item name display", function () {
      expect(element.html()).toContain('<div class="ng-binding">Item Name</div>');
    });
    it("should populate item upc display", function () {
      expect(element.html()).toContain('<div class="ng-binding">123456789012</div>');
    });

  });


}());
