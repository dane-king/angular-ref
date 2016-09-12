'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
var  home=require('./home');
describe('Grocery List Application', function() {
  beforeEach(function () {
    home.init();
  });
  
  it("should have correct title", function () {
    expect(home.getTitle()).toEqual('');
  });
});
