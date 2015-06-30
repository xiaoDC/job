Index = require '../controllers/index'
Admin = require '../controllers/admin'

module.exports = (app)->

    app.get '/', Index.index

    app.get '/admin', Admin.index

    app.get '/jobs', Index.job

