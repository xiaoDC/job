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
  return gulp.src('./src/config/*.coffee').pipe(sourcemaps.init()).pipe(coffee({
    bare: true
  })).pipe(sourcemaps.write()).pipe(gulp.dest('./app/config'));
});

gulp.task('coffee_all', ['coffee_controllers', 'coffee_models', 'coffee_schemas', 'coffee_js', 'coffee_spider'], function() {
  return gulp.src('./*.coffee').pipe(sourcemaps.init()).pipe(coffee({
    bare: true
  })).pipe(sourcemaps.write()).pipe(gulp.dest(''));
});

gulp.task('coffee_controllers', function() {
  return gulp.src('./src/controllers/*.coffee').pipe(sourcemaps.init()).pipe(coffee({
    bare: true
  })).pipe(sourcemaps.write()).pipe(gulp.dest('./app/controllers'));
});

gulp.task('coffee_models', function() {
  return gulp.src('./src/models/*.coffee').pipe(sourcemaps.init()).pipe(coffee({
    bare: true
  })).pipe(sourcemaps.write()).pipe(gulp.dest('./app/models'));
});

gulp.task('coffee_schemas', function() {
  return gulp.src('./src/schemas/*.coffee').pipe(sourcemaps.init()).pipe(coffee({
    bare: true
  })).pipe(sourcemaps.write()).pipe(gulp.dest('./app/schemas'));
});

gulp.task('coffee_js', function() {
  return gulp.src('./src/js/*.coffee').pipe(sourcemaps.init()).pipe(coffee({
    bare: true
  })).pipe(sourcemaps.write()).pipe(gulp.dest('./build/js'));
});

gulp.task('coffee_spider', function() {
  return gulp.src('./src/spider/*.coffee').pipe(sourcemaps.init()).pipe(coffee({
    bare: true
  })).pipe(sourcemaps.write()).pipe(gulp.dest('./build/spider'));
});

gulp.task('copy', ['copy_lib'], function() {
  var copy;
  copy = require('gulp-copy');
  return gulp.src(['./bower_components/react/react.js', './bower_components/requirejs/require.js', './bower_components/pubsub-js/src/pubsub.js']).pipe(copy('./build/js/', {
    prefix: 2
  }));
});

gulp.task('copy_lib', ['copy_css'], function() {
  var copy;
  copy = require('gulp-copy');
  return gulp.src(['./bower_components/pubsub-js/src/pubsub.js']).pipe(copy('./build/js/lib', {
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

gulp.task('exec', function(cb) {
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
  return gulp.src('./src/scss/*.scss').pipe(sourcemaps.init()).pipe(sass({
    outputStyle: 'expanded'
  })).pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'Android 4')).pipe(sourcemaps.write()).pipe(gulp.dest('./build/css'));
});

gulp.task('del', function() {});

//# sourceMappingURL=data:application/json;base64,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QTtFQUFBLElBQUEsR0FBTyxPQUFBLENBQVEsZUFBUixDQUF3QixDQUFDO1NBQ2hDLElBQUEsQ0FBSywyREFBTCxFQUFrRSxTQUFDLEdBQUQsRUFBTSxNQUFOLEVBQWMsTUFBZDtJQUM5RCxPQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7SUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7SUFDQSxFQUFBLENBQUcsR0FBSDtFQUg4RCxDQUFsRTtBQUZjLENBQWxCOztBQVFBLElBQUksQ0FBQyxJQUFMLENBQVUsTUFBVixFQUFrQixTQUFBO0FBQ2QsTUFBQTtFQUFBLElBQUEsR0FBTyxPQUFBLENBQVEsV0FBUjtFQUNQLFlBQUEsR0FBZSxPQUFBLENBQVEsbUJBQVI7U0FFZixJQUFJLENBQUMsR0FBTCxDQUFTLG1CQUFULENBQ0EsQ0FBQyxJQURELENBQ00sVUFBVSxDQUFDLElBQVgsQ0FBQSxDQUROLENBRUEsQ0FBQyxJQUZELENBRU0sSUFBQSxDQUFLO0lBQUEsV0FBQSxFQUFhLFVBQWI7R0FBTCxDQUZOLENBR0EsQ0FBQyxJQUhELENBR00sWUFBQSxDQUFhLGdCQUFiLEVBQStCLFVBQS9CLEVBQTJDLE1BQTNDLEVBQW1ELE1BQW5ELEVBQTJELFlBQTNELEVBQXlFLE9BQXpFLEVBQWtGLFdBQWxGLENBSE4sQ0FJQSxDQUFDLElBSkQsQ0FJTSxVQUFVLENBQUMsS0FBWCxDQUFBLENBSk4sQ0FLQSxDQUFDLElBTEQsQ0FLTSxJQUFJLENBQUMsSUFBTCxDQUFVLGFBQVYsQ0FMTjtBQUpjLENBQWxCOztBQVdBLElBQUksQ0FBQyxJQUFMLENBQVUsS0FBVixFQUFpQixTQUFBLEdBQUEsQ0FBakIiLCJmaWxlIjoiZ3VscGZpbGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJndWxwID0gcmVxdWlyZSAnZ3VscCdcbmNvZmZlZSA9IHJlcXVpcmUgJ2d1bHAtY29mZmVlJ1xuc291cmNlbWFwcyA9IHJlcXVpcmUgJ2d1bHAtc291cmNlbWFwcydcblxuXG5ndWxwLnRhc2sgJ2RlZmF1bHQnLCBbJ2RlbCcsICdjb2ZmZWUnLCAnY29weScsICdjanN4JywgJ2V4ZWMnLCAnc2FzcyddLCAtPlxuICAgIGd1bHAud2F0Y2ggJy4vc3JjL3Njc3MvKi5zY3NzJywgWydkZWwnLCAnc2FzcyddXG4gICAgZ3VscC53YXRjaCAnLi8qKi8qLmNvZmZlZScsIFsnZGVsJywgJ2NvZmZlZScsICdleGVjJ11cbiAgICBndWxwLndhdGNoICcuLyoqLyouY2pzeCcsIFsnZGVsJywgJ2Nqc3gnLCAnZXhlYyddXG5cbmd1bHAudGFzayAnY29mZmVlJywgWydjb2ZmZWVfYWxsJ10sIC0+XG4gICAgZ3VscC5zcmMgJy4vc3JjL2NvbmZpZy8qLmNvZmZlZSdcbiAgICAucGlwZSBzb3VyY2VtYXBzLmluaXQoKVxuICAgIC5waXBlIGNvZmZlZSBiYXJlOiB0cnVlXG4gICAgLnBpcGUgc291cmNlbWFwcy53cml0ZSgpXG4gICAgLnBpcGUgZ3VscC5kZXN0ICcuL2FwcC9jb25maWcnXG5cbmd1bHAudGFzayAnY29mZmVlX2FsbCcsIFsnY29mZmVlX2NvbnRyb2xsZXJzJywgJ2NvZmZlZV9tb2RlbHMnLCAnY29mZmVlX3NjaGVtYXMnLCdjb2ZmZWVfanMnLCAnY29mZmVlX3NwaWRlciddLCAtPlxuICAgIGd1bHAuc3JjICcuLyouY29mZmVlJ1xuICAgIC5waXBlIHNvdXJjZW1hcHMuaW5pdCgpXG4gICAgLnBpcGUgY29mZmVlIGJhcmU6IHRydWVcbiAgICAucGlwZSBzb3VyY2VtYXBzLndyaXRlKClcbiAgICAucGlwZSBndWxwLmRlc3QgJydcblxuZ3VscC50YXNrICdjb2ZmZWVfY29udHJvbGxlcnMnLCAtPlxuICAgIGd1bHAuc3JjICcuL3NyYy9jb250cm9sbGVycy8qLmNvZmZlZSdcbiAgICAucGlwZSBzb3VyY2VtYXBzLmluaXQoKVxuICAgIC5waXBlIGNvZmZlZSBiYXJlOiB0cnVlXG4gICAgLnBpcGUgc291cmNlbWFwcy53cml0ZSgpXG4gICAgLnBpcGUgZ3VscC5kZXN0ICcuL2FwcC9jb250cm9sbGVycydcblxuZ3VscC50YXNrICdjb2ZmZWVfbW9kZWxzJywgLT5cbiAgICBndWxwLnNyYyAnLi9zcmMvbW9kZWxzLyouY29mZmVlJ1xuICAgIC5waXBlIHNvdXJjZW1hcHMuaW5pdCgpXG4gICAgLnBpcGUgY29mZmVlIGJhcmU6IHRydWVcbiAgICAucGlwZSBzb3VyY2VtYXBzLndyaXRlKClcbiAgICAucGlwZSBndWxwLmRlc3QgJy4vYXBwL21vZGVscydcblxuZ3VscC50YXNrICdjb2ZmZWVfc2NoZW1hcycsIC0+XG4gICAgZ3VscC5zcmMgJy4vc3JjL3NjaGVtYXMvKi5jb2ZmZWUnXG4gICAgLnBpcGUgc291cmNlbWFwcy5pbml0KClcbiAgICAucGlwZSBjb2ZmZWUgYmFyZTogdHJ1ZVxuICAgIC5waXBlIHNvdXJjZW1hcHMud3JpdGUoKVxuICAgIC5waXBlIGd1bHAuZGVzdCAnLi9hcHAvc2NoZW1hcydcblxuZ3VscC50YXNrICdjb2ZmZWVfanMnLCAtPlxuICAgIGd1bHAuc3JjICcuL3NyYy9qcy8qLmNvZmZlZSdcbiAgICAucGlwZSBzb3VyY2VtYXBzLmluaXQoKVxuICAgIC5waXBlIGNvZmZlZSBiYXJlOiB0cnVlXG4gICAgLnBpcGUgc291cmNlbWFwcy53cml0ZSgpXG4gICAgLnBpcGUgZ3VscC5kZXN0ICcuL2J1aWxkL2pzJ1xuXG5ndWxwLnRhc2sgJ2NvZmZlZV9zcGlkZXInLCAtPlxuICAgIGd1bHAuc3JjICcuL3NyYy9zcGlkZXIvKi5jb2ZmZWUnXG4gICAgLnBpcGUgc291cmNlbWFwcy5pbml0KClcbiAgICAucGlwZSBjb2ZmZWUgYmFyZTogdHJ1ZVxuICAgIC5waXBlIHNvdXJjZW1hcHMud3JpdGUoKVxuICAgIC5waXBlIGd1bHAuZGVzdCAnLi9idWlsZC9zcGlkZXInXG5cbmd1bHAudGFzayAnY29weScsIFsnY29weV9saWInXSwtPlxuICAgIGNvcHkgPSByZXF1aXJlICdndWxwLWNvcHknXG5cbiAgICBndWxwLnNyYyBbJy4vYm93ZXJfY29tcG9uZW50cy9yZWFjdC9yZWFjdC5qcycsICcuL2Jvd2VyX2NvbXBvbmVudHMvcmVxdWlyZWpzL3JlcXVpcmUuanMnLCAnLi9ib3dlcl9jb21wb25lbnRzL3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzJ11cbiAgICAucGlwZSBjb3B5ICcuL2J1aWxkL2pzLycsXG4gICAgICAgIHByZWZpeDogMlxuXG5ndWxwLnRhc2sgJ2NvcHlfbGliJywgWydjb3B5X2NzcyddLC0+XG4gICAgY29weSA9IHJlcXVpcmUgJ2d1bHAtY29weSdcblxuICAgIGd1bHAuc3JjIFsnLi9ib3dlcl9jb21wb25lbnRzL3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzJ11cbiAgICAucGlwZSBjb3B5ICcuL2J1aWxkL2pzL2xpYicsXG4gICAgICAgIHByZWZpeDogM1xuXG5ndWxwLnRhc2sgJ2NvcHlfY3NzJywgLT5cbiAgICBjb3B5ID0gcmVxdWlyZSAnZ3VscC1jb3B5J1xuXG4gICAgZ3VscC5zcmMgWycuL2Jvd2VyX2NvbXBvbmVudHMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJ11cbiAgICAucGlwZSBjb3B5ICcuL2J1aWxkL2Nzcy8nLFxuICAgICAgICBwcmVmaXg6IDJcblxuZ3VscC50YXNrICdjanN4JywgLT5cbiAgICBjanN4ID0gcmVxdWlyZSAnZ3VscC1janN4J1xuXG4gICAgZ3VscC5zcmMgJy4vc3JjL2pzLyouY2pzeCdcbiAgICAucGlwZSBjanN4IGJhcmU6IHRydWVcbiAgICAucGlwZSBndWxwLmRlc3QgJy4vYnVpbGQvanMnXG5cbiMjIyDov5DooYwgcmVxdWlyZSDnmoQgci5qcyDkvJjljJbkvp3otZYgIyMjXG5ndWxwLnRhc2sgJ2V4ZWMnLCAoY2IpLT5cbiAgICBleGVjID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWNcbiAgICBleGVjICdub2RlIG5vZGVfbW9kdWxlcy9yZXF1aXJlanMvYmluL3IuanMgLW8gcmVxdWlyZS1jb25maWcuanMnLCAoZXJyLCBzdGRvdXQsIHN0ZGVyciktPlxuICAgICAgICBjb25zb2xlLmxvZyBzdGRvdXRcbiAgICAgICAgY29uc29sZS5sb2cgc3RkZXJyXG4gICAgICAgIGNiIGVyclxuICAgICAgICByZXR1cm5cblxuZ3VscC50YXNrICdzYXNzJywgLT5cbiAgICBzYXNzID0gcmVxdWlyZSAnZ3VscC1zYXNzJ1xuICAgIGF1dG9wcmVmaXhlciA9IHJlcXVpcmUgJ2d1bHAtYXV0b3ByZWZpeGVyJ1xuXG4gICAgZ3VscC5zcmMgJy4vc3JjL3Njc3MvKi5zY3NzJ1xuICAgIC5waXBlIHNvdXJjZW1hcHMuaW5pdCgpXG4gICAgLnBpcGUgc2FzcyBvdXRwdXRTdHlsZTogJ2V4cGFuZGVkJ1xuICAgIC5waXBlIGF1dG9wcmVmaXhlciAnbGFzdCAyIHZlcnNpb24nLCAnc2FmYXJpIDUnLCAnaWUgOCcsICdpZSA5JywgJ29wZXJhIDEyLjEnLCAnaW9zIDYnLCAnQW5kcm9pZCA0J1xuICAgIC5waXBlIHNvdXJjZW1hcHMud3JpdGUoKVxuICAgIC5waXBlIGd1bHAuZGVzdCAnLi9idWlsZC9jc3MnXG5cbmd1bHAudGFzayAnZGVsJywgLT5cbiAgICAjZGVsID0gcmVxdWlyZSAnZGVsJ1xuICAgICNkZWwgWydhcHAvKiovKi5qcycsICdidWlsZC8nXVxuXG4iXX0=