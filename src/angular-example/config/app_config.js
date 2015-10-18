(function () {
    "use strict";

    angular.module('app.config',['ui.router']).config(function($stateProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $stateProvider.state('login',{
            url:'/login'
        });
    });
})();
