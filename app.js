var Spider, app, bodyParser, dbUrl, express, favicon, mongoose, morgan, path, port;

express = require('express');

morgan = require('morgan');

port = process.env.PORT || 3000;

mongoose = require('mongoose');

path = require('path');

bodyParser = require('body-parser');

favicon = require('serve-favicon');

app = express();

dbUrl = 'mongodb://localhost/jobs';

mongoose.connect(dbUrl);

app.use(express["static"](path.join(__dirname, 'build')));

app.use(bodyParser());

app.set('views', './app/views/pages/');

app.set('view engine', 'jade');

if ('development' === app.get('env')) {
  app.set('showStackError', true);
  app.use(morgan(':method :url :status'));
  mongoose.set('debug', true);
}

require('./app/config/routes')(app);

app.listen(port);

console.log("jobs started on port " + port);

Spider = require('./app/service/spider');

Spider.run();
