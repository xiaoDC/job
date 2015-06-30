Spider = require '../spider/spider_lagou'

exports.index = (req, res)->
    res.render 'index'

exports.job = (req, res)->
    res.send Spider.spider()