
module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'src/libs/angular/angular.js',
      'src/libs/angular-ui-router/release/angular-ui-router.js',
      'src/libs/angular-mocks/angular-mocks.js',
      'src/angular-example/**/*.js',
      'tests/**/*.spec.js'
    ],


    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};