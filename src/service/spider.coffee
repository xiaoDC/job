child_process = require 'child_process'
BufferHelper = require 'bufferhelper'
cheerio = require 'cheerio'

Spider =
    run:()->
        bufferhelper = new BufferHelper()
        child = child_process.spawn 'node', ['lagou.js'],
            cwd: './app/service/spider'
        child.stdout.on 'data', (data)->
            bufferhelper.concat data
        child.on 'close', (code)->
            $ = cheerio.load bufferhelper.toString()
            els = $('.mainNavs .menu_box .reset dd a')
            for i in [0..els.length]
                el = cheerio(els[i]).text()

exports.run =  Spider.run
