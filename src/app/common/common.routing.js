(function() {
  'use strict';
  angular.module('app.common')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('404',{
      url:'/404',
      templateUrl:'notFound.tpl.html'
    });
    $urlRouterProvider.otherwise('/404');
  });
}());
