# Spider = require '../spider/spider'

exports.index = (req, res)->
    res.render 'index'

exports.job = (req, res)->
    res.send 'Spider'