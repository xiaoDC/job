http = require 'http'
url = 'http://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91?px=default&city=%E6%9D%AD%E5%B7%9E'
_ = require 'underscore'

data = ''
req = http.request url, (res)->
    res.setEncoding 'utf-8'
    res.on 'data', (chunk)->
        data += chunk
    res.on 'end', ()->
        console.log data

req.end()

class Scrapy
    constructor: (_url) ->
        @.url = _url
    fetch: (next)->
        _.each @.url, ()->




module.exports = Scrapy
