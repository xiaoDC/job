var coffee, gulp;

gulp = require('gulp');

coffee = require('gulp-coffee');

gulp.task('default', ['coffee', 'copy', 'cjsx', 'exec'], function() {});

gulp.task('coffee', ['coffee_all'], function() {
  return gulp.src('./src/config/*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./app/config'));
});

gulp.task('coffee_all', ['coffee_controllers', 'coffee_modles', 'coffee_schemas', 'coffee_js'], function() {
  return gulp.src('./*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest(''));
});

gulp.task('coffee_controllers', function() {
  return gulp.src('./src/controllers/*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./app/controllers'));
});

gulp.task('coffee_modles', function() {
  return gulp.src('./src/models/*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./app/models'));
});

gulp.task('coffee_schemas', function() {
  return gulp.src('./src/schemas/*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./app/schemas'));
});

gulp.task('coffee_js', function() {
  return gulp.src('./src/js/*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./build/js'));
});

gulp.task('copy', function() {
  var copy;
  copy = require('gulp-copy');
  return gulp.src(['./bower_components/react/react.js', './bower_components/requirejs/require.js']).pipe(copy('./build/js/', {
    prefix: 2
  }));
});

gulp.task('cjsx', function() {
  var cjsx;
  cjsx = require('gulp-cjsx');
  return gulp.src('./src/js/*.cjsx').pipe(cjsx({
    bare: true
  })).pipe(gulp.dest('./build/js'));
});


/* 运行 require 的 r.js 优化依赖 */

gulp.task('exec', function(cb) {
  var exec;
  exec = require('child_process').exec;
  return exec('node node_modules/requirejs/bin/r.js -o require-config.js', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
