(function() {
  'use strict';
  angular.module('app.routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/first');

      $stateProvider.state('first', {
        url: '/first',
        templateUrl: 'views/test.html'
      }).state('second', {
        url: '/second',
        template: '<div>second</div>'
      });
    });
})();
