'use strict';
describe('description', function() {
  var selectController, scope, sc;
  beforeEach(module('app.select'));
  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    var items =items = getItems();
    selectController = $controller('SelectCtrl as sc', {
      $scope: scope,
      items: items
    });
    sc = scope.sc;
  }));
  describe('Initialize', function() {
    it("should have an empty select list", function() {
      expect(sc.selected).toEqual([]);
    });
    it("should have an items list equal to list passed in", function() {
      expect(sc.items).toEqual(getItems());
    });

  });
  describe('Selecting', function() {
    var firstItem, items;
    beforeEach(function() {
      items = getItems();
      firstItem = sc.items[0];
    });

    it("should add item to selected list when selected", function() {
      sc.select(firstItem);
      expect(sc.selected).toContain(jasmine.objectContaining(firstItem));
    });

    it("should remove item when select is called twice", function() {
      sc.select(firstItem);
      sc.select(firstItem);
      expect(sc.selected).not.toContain(jasmine.objectContaining(firstItem));

    });
  });

  function getItems(){
    return [{
      id: 1,
      name: 'One'
    }, {
      id: 2,
      name: 'Two'
    }];
  }
});
