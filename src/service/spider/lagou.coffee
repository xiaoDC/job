request = require 'request'
url = 'http://www.lagou.com/jobs/positionAjax.json'
request url, (err, response, body)->
    process.stdout.write body
    process.exit()