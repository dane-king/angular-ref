(function() {
  'use strict';

  function itemsService($http, usda_url) {
    var found_items = [];

    function parseSearch(response){
        var responseData = response.data;
        var list = responseData.list;
        found_items=list.item;
        return found_items;
      }

    function buildParams(term, key) {}

    function search(term) {
      return $http.get(usda_url)
        .then(parseSearch);
    }

    function getItems() {
      return found_items;
    }

    return {
      getItems: getItems,
      search: search
    };
  }
  itemsService.$inject = ['$http', 'usda_url'];
  angular.module('app.items')
    .factory('itemsService', itemsService);
}());