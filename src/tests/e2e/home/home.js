(function() {
  'use strict';

  function init(){
    browser.get('index.html');
  }

  function home(){
    var header=element(by.css('h2'));

    var items=element(by.binding('sc.item'));
    var nav=element(by.css('nav'));
    function getHeader(){
      return header.getText();
    }
    function getTitle(){
      return browser.getTitle();
    }
    function goToPage(pageName){
      var selector='[ui-sref="page"]'.replace('page',pageName);
      nav.element(by.css(selector)).click();
    }
    function getFirstItem() {

    }
    return {
      init:init,
      getHeader:getHeader,
      goToPage:goToPage,
      getTitle:getTitle,
      getFirstItem:getFirstItem
    };
  }

  module.exports = home();
}());
