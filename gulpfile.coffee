gulp = require 'gulp'
coffee = require 'gulp-coffee'

gulp.task 'default', ['coffee', 'copy', 'cjsx', 'exec'], ->

gulp.task 'coffee', ['coffee_all'], ->
    gulp.src './src/config/*.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest './app/config'

gulp.task 'coffee_all', ['coffee_controllers', 'coffee_modles', 'coffee_schemas','coffee_js'], ->
    gulp.src './*.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest ''

gulp.task 'coffee_controllers', ->
    gulp.src './src/controllers/*.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest './app/controllers'

gulp.task 'coffee_modles', ->
    gulp.src './src/models/*.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest './app/models'

gulp.task 'coffee_schemas', ->
    gulp.src './src/schemas/*.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest './app/schemas'

gulp.task 'coffee_js', ->
    gulp.src './src/js/*.coffee'
    .pipe coffee bare: true
    .pipe gulp.dest './build/js'

gulp.task 'copy', ->
    copy = require 'gulp-copy'

    gulp.src ['./bower_components/react/react.js', './bower_components/requirejs/require.js']
    .pipe copy './build/js/',
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