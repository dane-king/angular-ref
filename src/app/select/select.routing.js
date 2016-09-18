(function() {
  'use strict';
  function selectRoute($stateProvider){
    $stateProvider.state('select',{
      url:'/select',
      templateUrl:'select.tpl.html',
      resolve:{
        items:function(itemService){
          return itemService.getItems();
        }
      }
    });
  }
  selectRoute.$inject=['$stateProvider'];
  angular.module('app.select')
  .config(selectRoute);
}());
