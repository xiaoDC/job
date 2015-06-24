var app, bodyParser, express, favicon, path, port;

express = require('express');

port = process.env.PORT || 3000;

path = require('path');

bodyParser = require('body-parser');

favicon = require('serve-favicon');

app = express();

app.use(express["static"](path.join(__dirname, 'app')));

app.use(bodyParser());

app.set('views', './app/views/pages/');

app.set('view engine', 'jade');

require('./app/config/routes')(app);

app.listen(port);

console.log("jobs started on port " + port);
