gulp = require 'gulp'
coffee = require 'gulp-coffee'
sourcemaps = require 'gulp-sourcemaps'


gulp.task 'default', ['del', 'coffee', 'copy', 'cjsx', 'exec', 'sass'], ->
    gulp.watch './src/scss/*.scss', ['del', 'sass']
    gulp.watch './**/*.coffee', ['del', 'coffee', 'exec']
    gulp.watch './**/*.cjsx', ['del', 'cjsx', 'exec']

gulp.task 'coffee', ['coffee_all'], ->
    gulp.src './src/config/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee bare: true
    .pipe sourcemaps.write()
    .pipe gulp.dest './app/config'

gulp.task 'coffee_all', ['coffee_controllers', 'coffee_models', 'coffee_schemas','coffee_js', 'coffee_spider'], ->
    gulp.src './*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee bare: true
    .pipe sourcemaps.write()
    .pipe gulp.dest ''

gulp.task 'coffee_controllers', ->
    gulp.src './src/controllers/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee bare: true
    .pipe sourcemaps.write()
    .pipe gulp.dest './app/controllers'

gulp.task 'coffee_models', ->
    gulp.src './src/models/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee bare: true
    .pipe sourcemaps.write()
    .pipe gulp.dest './app/models'

gulp.task 'coffee_schemas', ->
    gulp.src './src/schemas/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee bare: true
    .pipe sourcemaps.write()
    .pipe gulp.dest './app/schemas'

gulp.task 'coffee_js', ->
    gulp.src './src/js/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee bare: true
    .pipe sourcemaps.write()
    .pipe gulp.dest './build/js'

gulp.task 'coffee_spider', ->
    gulp.src './src/spider/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee bare: true
    .pipe sourcemaps.write()
    .pipe gulp.dest './build/spider'

gulp.task 'copy', ['copy_lib'],->
    copy = require 'gulp-copy'

    gulp.src ['./bower_components/react/react.js', './bower_components/requirejs/require.js', './bower_components/pubsub-js/src/pubsub.js']
    .pipe copy './build/js/',
        prefix: 2

gulp.task 'copy_lib', ['copy_css'],->
    copy = require 'gulp-copy'

    gulp.src ['./bower_components/pubsub-js/src/pubsub.js']
    .pipe copy './build/js/lib',
        prefix: 3

gulp.task 'copy_css', ->
    copy = require 'gulp-copy'

    gulp.src ['./bower_components/normalize.css/normalize.css']
    .pipe copy './build/css/',
        prefix: 2

gulp.task 'cjsx', ->
    cjsx = require 'gulp-cjsx'

    gulp.src './src/js/*.cjsx'
    .pipe cjsx bare: true
    .pipe gulp.dest './build/js'

### 运行 require 的 r.js 优化依赖 ###
gulp.task 'exec', (cb)->
    exec = require('child_process').exec
    exec 'node node_modules/requirejs/bin/r.js -o require-config.js', (err, stdout, stderr)->
        console.log stdout
        console.log stderr
        cb err
        return

gulp.task 'sass', ->
    sass = require 'gulp-sass'
    autoprefixer = require 'gulp-autoprefixer'

    gulp.src './src/scss/*.scss'
    .pipe sourcemaps.init()
    .pipe sass outputStyle: 'expanded'
    .pipe autoprefixer 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'Android 4'
    .pipe sourcemaps.write()
    .pipe gulp.dest './build/css'

gulp.task 'del', ->
    #del = require 'del'
    #del ['app/**/*.js', 'build/']

