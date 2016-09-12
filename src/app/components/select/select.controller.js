(function() {
  'use strict';
  angular.module('app.select')
  .controller('SelectCtrl', SelectCtrl);

  function SelectCtrl(items){
    this.selected={};

    this.items=items;

    this.select=function(item){
      var found=this.selected[item.id];
      if(found){
        delete this.selected[item.id];
      }else{
        this.selected[item.id]=item;
      }
    };
  }
})();
