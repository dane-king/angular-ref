(function() {
  'use strict';
  angular.module('app.select')
  .controller('SelectCtrl', SelectCtrl);
  function isSame(item1){
    return function(item2){
      return item1.id==item2.id;
    };
  }
  function SelectCtrl(items){
    this.selected=[];
    this.items=items;
    this.select=function(item){
      var foundIndex=this.selected.findIndex(isSame(item));
      if(foundIndex>-1){
        this.selected.splice(foundIndex,1);
      }else{
        this.selected.push(item);
      }
    };
  }
})();
