module.exports = function(config){
  'use strict';
  config.set({

    basePath : 'src',

    files : [
      'vendor/angular/angular.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'app/**/*.js',
      'tests/unit/**/*.spec.js'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      moduleName: 'ngTemplates'
    },
    autoWatch : true,

    frameworks: ['jasmine'],
    reporters: ['jasmine-diff','progress'],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    customLaunchers:{
      Chrome_travis_ci:{
        base:'Chrome',
        flags:['--no-sandbox']
      }
    },
    singleRun: false,
    concurrency: Infinity
  });
  if(process.env.TRAVIS){
    console.log('running on travis');
    config.browsers=['Chrome_travis_ci'];
  }
};
