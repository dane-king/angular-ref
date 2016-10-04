/* global __dirname */
'use strict';
var gulp = require('gulp'),
  del = require('del'),
  concat = require('gulp-concat'),
  Server = require('karma').Server,
  sass = require('gulp-sass'),
  jshint = require('gulp-jshint'),
  Dgeni = require('dgeni'),
  paths = {
    js: './src/app/**/*.js',
    sass: './src/assets/sass/**/*.scss',
    distDocs: './docs/build',
    docs: './docs/app/*.js'
    };



/* Tasks */
gulp.task('default', ['jshint:watch', 'sass:watch', 'test:watch']);

gulp.task('copyDocs', function() {
  return gulp.src(paths.docs)
    .pipe(gulp.dest(paths.distDocs + '/src'));
});

gulp.task('cleanDocs', function() {
  //del.sync(paths.distDocs);
});

gulp.task('dgeni',['copyDocs'], function() {
  var dgeni = new Dgeni([require('./docs/config')]);
  return dgeni.generate();
});

gulp.task('jshint:watch', function() {
  gulp.watch(paths.js, ['jshint']);
});

gulp.task('jshint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test:watch', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, done).start();
});

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(sass.sync()).on('error', sass.logError)
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function() {
  return gulp.watch(paths.sass, ['sass']);
});
gulp.task('clean:dist1', function() {
  del.sync('./dist');
});

gulp.task('copyAssets', function() {
  return gulp.src(['src/index.html', 'src/app/**/*.html'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('copyLibs', function() {
  return gulp.src('src/vendor/**')
    .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('publish', ['clean:dist1', 'sass', 'concat', 'copyAssets', 'copyLibs']);

gulp.task('concat', function() {
  return gulp.src(paths.js)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist'));
});
