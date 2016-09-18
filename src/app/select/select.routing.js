(function() {
  'use strict';
  function selectRoute($stateProvider){
    $stateProvider.state('select',{
      url:'/select',
      templateUrl:'select.tpl.html'
    });
  }
  selectRoute.$inject=['$stateProvider'];
  angular.module('app.select')
  .config(selectRoute);
}());
