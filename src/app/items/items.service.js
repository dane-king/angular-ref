(function() {
  'use strict';
  function itemsService ($http) {
    return {
      search:function search () {
          return '';
      }
    };
  }
  itemsService.$inject=['$http'];
  angular.module('app.items')
  .factory('itemsService',itemsService);
}());
