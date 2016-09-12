/* globals browser*/
'use strict';

function init(){
  browser.get('index.html');
}

function home(){
  function getTitle(){
    return browser.getTitle();
  }
  return {
    goToPage:init,
    getTitle:getTitle
  };
}

module.exports = home();
