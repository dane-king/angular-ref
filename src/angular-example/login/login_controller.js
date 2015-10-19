"use strict";

(function (param) {
    angular.module('app.login',['ui-router'])
        .config(['$stateProvider',function($stateProvider){
            $stateProvider.state('login',{
                url:'/login',
                templateUrl:'login/login.html',
                controller:'LoginCtrl as login'
            });
        }])
        .controller('LoginCtrl',['$log', function($log){
            $log.info('In controller now');

        }]);
})();
