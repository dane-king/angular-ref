(function() {
  'use strict';


  function SelectCtrl(itemService){
    var vm=this;

    this.selected={};
    this.items=[];

    this.term="";

    this.search=function () {
      itemService.search(vm.term).then(function (data) {
        vm.items=data;
      });
    };
    this.select=function(item){
      var found=this.selected[item.id];
      if(found){
        delete this.selected[item.id];
      }else{
        this.selected[item.id]=item;
      }
    };
  }
  SelectCtrl.$inject=['itemService'];
  angular.module('app.select')
  .controller('SelectCtrl', SelectCtrl);
})();
