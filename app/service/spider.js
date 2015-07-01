var BufferHelper, Spider, child_process;

child_process = require('child_process');

BufferHelper = require('bufferhelper');

Spider = {
  run: function() {
    var bufferhelper, child;
    bufferhelper = new BufferHelper();
    child = child_process.spawn('node', ['lagou.js'], {
      cwd: './app/service/spider'
    });
    child.stdout.on('data', function(data) {
      return bufferhelper.concat(data);
    });
    return child.on('close', function(code) {
      var data, json;
      data = bufferhelper.toString();
      json = JSON.parse(data);
      return console.log(json);
    });
  }
};

exports.run = Spider.run;
