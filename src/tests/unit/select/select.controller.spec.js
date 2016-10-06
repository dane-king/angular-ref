(function() {
  'use strict';
  describe('description', function() {
    var selectController, scope,itemService, $rootScope;
    beforeEach(module('app.select', 'app.common'));

    beforeEach(inject(function($q, _$rootScope_, $controller, _itemService_) {

      var successPromise=$q.defer();
      successPromise.resolve(items);
      spyOn(_itemService_,"search").and.returnValue(successPromise.promise);

      itemService=_itemService_;

      $rootScope=_$rootScope_;
      scope = $rootScope.$new();
      selectController = $controller('SelectCtrl as sc', {
        $scope: scope,
        items: _itemService_
      });
    }));

    describe('Initialize', function() {
      it("should have an empty select list", function() {
        expect(scope.sc.selected).toEqual({});
      });
    });
    describe('Search', function() {
      var term;
      beforeEach(function () {
        term="searchTerm";
        scope.sc.term=term;
        scope.sc.search();
        $rootScope.$digest();
      });
      it("should search items when changed", function () {
        expect(itemService.search).toHaveBeenCalledWith(term);
      });
      it("should update items when searched", function () {
        expect(scope.sc.items).toEqual(items);
      });
    });
    describe('Selecting', function() {
      var firstItem;
      beforeEach(function() {
        firstItem = items[0];
      });

      it("should add item to selected list when selected", function() {
        scope.sc.select(firstItem);
        expect(scope.sc.selected[1]).toEqual(firstItem);
      });

      it("should remove item when select is called twice", function() {
        scope.sc.select(firstItem);
        scope.sc.select(firstItem);
        expect(scope.sc.selected[1]).not.toBeDefined();
      });
      it("should filter out upc`", function () {
        var  upc=scope.sc.getUpc(firstItem.name);
        expect(upc).toEqual('123456789012');
      });
    });

    var items = [{
        id: 1,
        name: 'Item One, UPC: 123456789012'
      }, {
        id: 2,
        name: 'Item Two, UPC: 123456789044'
      }];
  });
}());
