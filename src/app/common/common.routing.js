(function() {
  'use strict';

  function defaultRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home',{
      url:'',
      templateUrl:'views/home.tpl.html'
    })
    .state('404',{
      url:'/404',
      templateUrl:'views/notFound.tpl.html'
    });
    $urlRouterProvider.otherwise('/404');
  }
  defaultRoute.$inject=['$stateProvider', '$urlRouterProvider'];
  angular.module('app.common')
  .config(defaultRoute);
}());
