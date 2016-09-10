/* global __dirname */
'use strict';
var gulp=require('gulp'),
clean=require('gulp-clean'),
concat=require('gulp-concat'),
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
gulp.task('clean:dist',function(){
  return gulp.src('./dist',{read:false})
  .pipe(clean({force: true}));
});
gulp.task('copyAssets',function () {
  gulp.src('src/index.html')
  .pipe(gulp.dest('./dist'));
});
gulp.task('publish',['clean:dist','sass','concat','copyAssets']);

gulp.task('concat',function () {
  return gulp.src(js_path)
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist'));
});
