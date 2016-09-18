(function() {
  'use strict';

  function init(){
    browser.get('index.html');
  }

  function home(){
    var header=element(by.css('h2'));
    function getHeader(){
      return header.getText();
    }
    function getTitle(){
      return browser.getTitle();
    }
    return {
      init:init,
      getHeader:getHeader,
      goToPage:function () {

      },
      getTitle:getTitle
    };
  }

  module.exports = home();
}());
