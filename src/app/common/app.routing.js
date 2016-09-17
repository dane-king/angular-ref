(function() {
  'use strict';
  angular.module('app.common',['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('404',{
      url:'/404',
      templateUrl:'notFound.tpl.html'
    });
    $urlRouterProvider.otherwise('/404');
  });
}());
