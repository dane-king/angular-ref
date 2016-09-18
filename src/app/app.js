(function() {
  'use strict';
  function defaultLoad($state) {
    $state.go('home');
  }
  defaultLoad.$inject=['$state'];
  angular.module('app.grocery', ['app.select','app.common'])
  .run(defaultLoad);

})();
