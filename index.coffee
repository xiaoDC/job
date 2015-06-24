http = require 'http'
# url = 'http://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91?px=default&city=%E6%9D%AD%E5%B7%9E'
url = 'http://www.lagou.com/jobs/positionAjax.json?px=default&city=%E6%9D%AD%E5%B7%9E'
fs = require 'fs'
file = './index.html'
writeFile = (_file, _context)->
    fs.appendFile _file, _context, (err)->
        if err
            console.log err
        else
            console.log 'write file done'

data = ''
req = http.request url, (res)->
    res.setEncoding 'utf-8'
    res.on 'data', (chunk)->
        data += chunk
    res.on 'end', (tt)->
        # console.log data
        console.log tt
        writeFile file, data

req.end()
#


# request = require 'request'
# url = 'http://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91?px=default&city=%E6%9D%AD%E5%B7%9E'
# fs = require 'fs'
# file = './index.html'
# writeFile = (_file, _context)->
#     fs.appendFile _file, _context, (err)->
#         if err
#             console.log err
#         else
#             console.log 'write file done'


# request url, (err, resp, body)->
#     if !err and resp.statusCode is 200
#         writeFile file, body



