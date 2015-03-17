// Karma configuration
// Generated on Tue Mar 17 2015 08:50:53 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({


    frameworks: ['mocha','chai'],


      basePath : './',

      files : [
          'app/libs/angular/angular.js',
          'app/libs/angular-ui-router/release/angular-ui-router.js',
          'app/libs/angular-mocks/angular-mocks.js',
          'app/components/**/*.js',
          'app/view*/**/*.js',
          'tests/**/*.js'
      ],

      exclude : [
          'tests/e2e-tests/**/*'

      ],


    preprocessors: {
    },


    reporters: ['progress'],


    port: 9876,


    colors: true,

    logLevel: config.LOG_INFO,


    autoWatch: true,


    browsers: ['PhantomJS', 'Chrome'],


    singleRun: false
  });
};
