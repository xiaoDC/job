var coffee, gulp, sourcemaps;

gulp = require('gulp');

coffee = require('gulp-coffee');

sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['del', 'coffee', 'copy', 'cjsx', 'exec', 'sass'], function() {
  gulp.watch('./src/scss/*.scss', ['del', 'sass']);
  gulp.watch('./**/*.coffee', ['del', 'coffee', 'exec']);
  return gulp.watch('./**/*.cjsx', ['del', 'cjsx', 'exec']);
});

gulp.task('coffee', ['coffee_all'], function() {
  return gulp.src('./src/config/*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./app/config'));
});

gulp.task('coffee_all', ['coffee_controllers', 'coffee_models', 'coffee_schemas', 'coffee_js', 'coffee_service'], function() {
  return gulp.src('./*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest(''));
});

gulp.task('coffee_controllers', function() {
  return gulp.src('./src/controllers/*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./app/controllers'));
});

gulp.task('coffee_models', function() {
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

gulp.task('coffee_service', function() {
  return gulp.src('./src/service/**/*.coffee').pipe(coffee({
    bare: true
  })).pipe(gulp.dest('./app/service'));
});

gulp.task('copy', ['copy_lib', 'copy_css'], function() {
  var copy;
  copy = require('gulp-copy');
  return gulp.src(['./bower_components/react/react.js', './bower_components/requirejs/require.js']).pipe(copy('./build/js/', {
    prefix: 2
  }));
});

gulp.task('copy_lib', function() {
  var copy;
  copy = require('gulp-copy');
  return gulp.src(['./bower_components/pubsub-js/src/pubsub.js', './bower_components/jquery/dist/jquery.js']).pipe(copy('./build/js/', {
    prefix: 3
  }));
});

gulp.task('copy_css', function() {
  var copy;
  copy = require('gulp-copy');
  return gulp.src(['./bower_components/normalize.css/normalize.css']).pipe(copy('./build/css/', {
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

gulp.task('exec', ['coffee'], function(cb) {
  var exec;
  exec = require('child_process').exec;
  return exec('node node_modules/requirejs/bin/r.js -o require-config.js', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('sass', function() {
  var autoprefixer, sass;
  sass = require('gulp-sass');
  autoprefixer = require('gulp-autoprefixer');
  return gulp.src('./src/scss/*.scss').pipe(sass({
    outputStyle: 'expanded'
  })).pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'Android 4')).pipe(gulp.dest('./build/css'));
});

gulp.task('del', function() {});
