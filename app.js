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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxPQUFBLEdBQVUsT0FBQSxDQUFRLFNBQVI7O0FBQ1YsTUFBQSxHQUFTLE9BQUEsQ0FBUSxRQUFSOztBQUNULElBQUEsR0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQVosSUFBb0I7O0FBQzNCLFFBQUEsR0FBVyxPQUFBLENBQVEsVUFBUjs7QUFDWCxJQUFBLEdBQU8sT0FBQSxDQUFRLE1BQVI7O0FBQ1AsVUFBQSxHQUFhLE9BQUEsQ0FBUSxhQUFSOztBQUNiLE9BQUEsR0FBVSxPQUFBLENBQVEsZUFBUjs7QUFLVixHQUFBLEdBQU0sT0FBQSxDQUFBOztBQUNOLEtBQUEsR0FBUTs7QUFFUixRQUFRLENBQUMsT0FBVCxDQUFpQixLQUFqQjs7QUFFQSxHQUFHLENBQUMsR0FBSixDQUFRLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBZSxJQUFJLENBQUMsSUFBTCxDQUFVLFNBQVYsRUFBcUIsT0FBckIsQ0FBZixDQUFSOztBQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVEsVUFBQSxDQUFBLENBQVI7O0FBUUEsR0FBRyxDQUFDLEdBQUosQ0FBUSxPQUFSLEVBQWlCLG9CQUFqQjs7QUFDQSxHQUFHLENBQUMsR0FBSixDQUFRLGFBQVIsRUFBdUIsTUFBdkI7O0FBR0EsSUFBRyxhQUFBLEtBQWlCLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBUixDQUFwQjtFQUNJLEdBQUcsQ0FBQyxHQUFKLENBQVEsZ0JBQVIsRUFBMEIsSUFBMUI7RUFDQSxHQUFHLENBQUMsR0FBSixDQUFRLE1BQUEsQ0FBTyxzQkFBUCxDQUFSO0VBRUEsUUFBUSxDQUFDLEdBQVQsQ0FBYSxPQUFiLEVBQXNCLElBQXRCLEVBSko7OztBQU9BLE9BQUEsQ0FBUSxxQkFBUixDQUFBLENBQStCLEdBQS9COztBQUVBLEdBQUcsQ0FBQyxNQUFKLENBQVcsSUFBWDs7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLHVCQUFBLEdBQXdCLElBQXBDOztBQUVBLE1BQUEsR0FBUyxPQUFBLENBQVEsc0JBQVI7O0FBQ1QsTUFBTSxDQUFDLEdBQVAsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJleHByZXNzID0gcmVxdWlyZSAnZXhwcmVzcydcbm1vcmdhbiA9IHJlcXVpcmUgJ21vcmdhbidcbnBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDBcbm1vbmdvb3NlID0gcmVxdWlyZSAnbW9uZ29vc2UnXG5wYXRoID0gcmVxdWlyZSAncGF0aCdcbmJvZHlQYXJzZXIgPSByZXF1aXJlICdib2R5LXBhcnNlcidcbmZhdmljb24gPSByZXF1aXJlICdzZXJ2ZS1mYXZpY29uJ1xuIyBzZXNzaW9uID0gcmVxdWlyZSAnZXhwcmVzcy1zZXNzaW9uJ1xuIyBtb25nb1N0b3JlID0gcmVxdWlyZSgnY29ubmVjdC1tb25nbycpIHNlc3Npb25cblxuXG5hcHAgPSBleHByZXNzKClcbmRiVXJsID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Qvam9icydcblxubW9uZ29vc2UuY29ubmVjdCBkYlVybFxuXG5hcHAudXNlIGV4cHJlc3Muc3RhdGljIHBhdGguam9pbiBfX2Rpcm5hbWUsICdidWlsZCdcbmFwcC51c2UgYm9keVBhcnNlcigpXG4jIGFwcC51c2UgZmF2aWNvbiBwYXRoLmpvaW4gX19kaXJuYW1lLCAnYnVpbGQvaW1nL2Zhdmljb24uaWNvJ1xuIyBhcHAudXNlIHNlc3Npb25cbiMgICAgIHNlY3JldDogJ21vdmllJ1xuIyAgICAgc3RvcmU6IG5ldyBtb25nb1N0b3JlXG4jICAgICAgICAgdXJsOiBkYlVybFxuIyAgICAgICAgIGNvbGxlY3Rpb246ICdzZXNzaW9ucydcblxuYXBwLnNldCAndmlld3MnLCAnLi9hcHAvdmlld3MvcGFnZXMvJ1xuYXBwLnNldCAndmlldyBlbmdpbmUnLCAnamFkZSdcbiMgYXBwLmxvY2Fscy5tb21lbnQgPSByZXF1aXJlICdtb21lbnQnXG5cbmlmICdkZXZlbG9wbWVudCcgaXMgYXBwLmdldCAnZW52J1xuICAgIGFwcC5zZXQgJ3Nob3dTdGFja0Vycm9yJywgdHJ1ZVxuICAgIGFwcC51c2UgbW9yZ2FuICc6bWV0aG9kIDp1cmwgOnN0YXR1cydcbiMgICAgICMgYXBwLmxvY2Fscy5wcmV0dHkgPSB0cnVlXG4gICAgbW9uZ29vc2Uuc2V0ICdkZWJ1ZycsIHRydWVcblxuXG5yZXF1aXJlKCcuL2FwcC9jb25maWcvcm91dGVzJykgYXBwXG5cbmFwcC5saXN0ZW4gcG9ydFxuY29uc29sZS5sb2cgXCJqb2JzIHN0YXJ0ZWQgb24gcG9ydCAje3BvcnR9XCJcblxuU3BpZGVyID0gcmVxdWlyZSgnLi9hcHAvc2VydmljZS9zcGlkZXInKVxuU3BpZGVyLnJ1bigpXG4iXX0=