(function() {
  'use strict';
  /* https://github.com/angular/protractor/blob/master/docs/toc.md */
  var  home=require('./home');


  describe('Grocery List Application', function() {
    beforeEach(function () {
      console.log(home);
      home.init();
    });

    it("should have correct title", function () {
      expect(home.getTitle()).toEqual('Grocery List');
    });

    it("should load home text", function () {
      expect(home.getHeader()).toEqual('Grocery List Creator');
    });
    it("should load items when clicking select navivation", function () {
      home.goToPage("select");
      expect(home.getFirstItem()).toEqual();

    });
  });
}());
