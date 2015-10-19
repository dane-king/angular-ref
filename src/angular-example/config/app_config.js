(function () {
    "use strict";

    angular.module('app.config',['ui.router']).config(['$stateProvider', '$locationProvider',function($stateProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $stateProvider.state('login',{
            url:'/login',
            templateUrl:'login/login.html'
        });
    }]);
})();
