(function() {
  'use strict';
  function getItemsFromService(itemService){
    return itemService.getItems();
  }
  getItemsFromService.$inject=['itemService'];

  function selectRoute($stateProvider){
    $stateProvider.state('select',{
      url:'/select',
      templateUrl:'views/select.tpl.html',
      controller:'SelectCtrl as sc'
    });
  }
  selectRoute.$inject=['$stateProvider'];
  angular.module('app.select')
  .config(selectRoute);
}());
