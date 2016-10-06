(function() {
  'use strict';
  /**
   * @ngdoc service
   * @name itemService
   * @module app.items
   *
   * @description Provides HTTP methods to the USDA api.
   *
   * ## Lorem Ipsum 1
   * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
   * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
   *
   * ## Lorem Ipsum 2
   * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
   * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
   */
  function itemService($http, usda_url, usda_key) {
    var found_items = [];

    function parseSearch(response){
        var responseData = response.data;
        var list = responseData.list;
        found_items=list.item;
        return found_items;
      }

    function buildParams(term) {
      var search='&q=' + term;
      search+="&api_key=" + usda_key;
      return search;
    }
    function search(term) {
      return $http.get(usda_url + buildParams(term))
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
  itemService.$inject = ['$http', 'usda_url','usda_key'];
  angular.module('app.items')
    .factory('itemService', itemService);
}());
