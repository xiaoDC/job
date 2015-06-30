http = require 'http'
url = 'http://www.lagou.com/jobs/positionAjax.json?'

Spider_lagou =
    run:()->
        # data = ''
        # req = http.request url, (res)->
        #     res.setEncoding 'utf-8'
        #     res.on 'data', (chunk)->
        #         data += chunk
        #     res.on 'end', ()->

        # req.end()
        console.log 'test'

exports.run =  Spider_lagou.run
