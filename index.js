var data, file, fs, http, req, url, writeFile;

http = require('http');

url = 'http://www.lagou.com/jobs/positionAjax.json?px=default&city=%E6%9D%AD%E5%B7%9E';

fs = require('fs');

file = './index.html';

writeFile = function(_file, _context) {
  return fs.appendFile(_file, _context, function(err) {
    if (err) {
      return console.log(err);
    } else {
      return console.log('write file done');
    }
  });
};

data = '';

req = http.request(url, function(res) {
  res.setEncoding('utf-8');
  res.on('data', function(chunk) {
    return data += chunk;
  });
  return res.on('end', function(tt) {
    console.log(tt);
    return writeFile(file, data);
  });
});

req.end();
