(function() {
  'use strict';


  function SelectCtrl(itemService){
    var vm=this;

    this.selected={};
    this.items=[];

    this.term="";
    this.getUpc=function (name) {
      return name.split('UPC:')[1].trim();
    };
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

  /**
   * @ngdoc type
   * @module app.select
   * @name SelectCtrl
   * @requires itemService
   * @description Controller for Selecting Items
   *
   * ## Lorem Ipsum 1
   * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
   * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
   *
   * ## Lorem Ipsum 2
   * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
   * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
   */

  SelectCtrl.$inject=['itemService'];
  angular.module('app.select')
  .controller('SelectCtrl', SelectCtrl);
}());
