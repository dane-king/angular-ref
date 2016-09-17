(function() {
  'use strict';
  angular.module('app.select')
  .config(function($stateProvider){
    $stateProvider.state('select',{
      url:'/select',
      templateUrl:'select.tpl.html'
    });
  });
}());
