(function() {
  'use strict';
  angular.module('docs')
  .constant('{$ doc.name $}', {$ doc.items | json $});
}());
