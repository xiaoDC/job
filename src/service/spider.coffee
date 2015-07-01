child_process = require 'child_process'
BufferHelper = require 'bufferhelper'

Spider =
    run:()->
        bufferhelper = new BufferHelper()
        child = child_process.spawn 'node', ['lagou.js'],
            cwd: './app/service/spider'
        child.stdout.on 'data', (data)->
            bufferhelper.concat data
        child.on 'close', (code)->
            data = bufferhelper.toString()
            json = JSON.parse data
            console.log json
exports.run =  Spider.run
