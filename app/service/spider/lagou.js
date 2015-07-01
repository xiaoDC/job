var request, url;

request = require('request');

url = 'http://www.lagou.com/';

request(url, function(err, response, body) {
  process.stdout.write(body);
  return process.exit();
});
