request = require 'request'
# url = 'http://www.lagou.com/jobs/positionAjax.json'
url = 'http://www.lagou.com/'
request url, (err, response, body)->
    process.stdout.write body
    process.exit()