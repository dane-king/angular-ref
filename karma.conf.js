'use strict';
module.exports = function(config){
  config.set({

    basePath : 'src',

    files : [
      'vendor/angular/angular.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'angular-example/app.module.js',
      'angular-example/**/*.js',
      '../tests/**/*.spec.js',
      'views/**/*.html'
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
    reporters: ['progress'],
    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
