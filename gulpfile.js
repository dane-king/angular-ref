/* global __dirname */
'use strict';
var gulp=require('gulp'),
Server = require('karma').Server,
sass=require('gulp-sass'),
jshint=require('gulp-jshint'),
js_path='./src/app/**/*.js',
sass_path='./src/assets/sass/**/*.scss';


/* Tasks */
gulp.task('default',['jshint:watch','sass:watch','test:watch']);

gulp.task('jshint:watch', function() {
  gulp.watch(js_path, ['jshint']);
});

gulp.task('jshint',function () {
  return gulp.src(js_path)
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test:watch',function (done) {
  new Server({
    configFile:__dirname + '/karma.conf.js',
    singleRun:false
  },done).start();
});

gulp.task('sass',function () {
  return gulp.src(sass_path)
  .pipe(sass.sync()).on('error',sass.logError)
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(sass_path,['sass']);
});
