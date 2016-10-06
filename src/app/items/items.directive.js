(function() {
  'use strict';
  angular.module('app.items')
  .directive('dkItem',function () {
    return {
      retrict:'E',
      scope:{
        item:'='
      },
      template: [
        '<div>{{item.group}}</div>',
        '<div>{{item.name}}</div>',
        '<div>{{item.upc}}</div>'
      ].join(""),
      link:function (scope) {
          if(scope.item.name.indexOf('UPC')!==-1){
            var nameArray=scope.item.name.split(',');
            var name=nameArray[0];

            //use regex replace
            var upc=nameArray[1].split('UPC:')[1].trim();
            scope.item.name=name;
            scope.item.upc=upc;
          }
      }
    };
  });
}());
