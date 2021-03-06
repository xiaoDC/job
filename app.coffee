express = require 'express'
morgan = require 'morgan'
port = process.env.PORT || 3000
mongoose = require 'mongoose'
path = require 'path'
bodyParser = require 'body-parser'
favicon = require 'serve-favicon'
# session = require 'express-session'
# mongoStore = require('connect-mongo') session


app = express()
dbUrl = 'mongodb://localhost/jobs'

mongoose.connect dbUrl

app.use express.static path.join __dirname, 'build'
app.use bodyParser()
# app.use favicon path.join __dirname, 'build/img/favicon.ico'
# app.use session
#     secret: 'movie'
#     store: new mongoStore
#         url: dbUrl
#         collection: 'sessions'

app.set 'views', './app/views/pages/'
app.set 'view engine', 'jade'
# app.locals.moment = require 'moment'

if 'development' is app.get 'env'
    app.set 'showStackError', true
    app.use morgan ':method :url :status'
#     # app.locals.pretty = true
    mongoose.set 'debug', true


require('./app/config/routes') app

app.listen port
console.log "jobs started on port #{port}"

Spider = require('./app/service/spider')
Spider.run()
