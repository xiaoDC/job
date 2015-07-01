var request, url;

request = require('request');

url = 'http://www.lagou.com/jobs/positionAjax.json';

request(url, function(err, response, body) {
  process.stdout.write(body);
  return process.exit();
});
