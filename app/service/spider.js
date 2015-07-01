var BufferHelper, Spider, cheerio, child_process;

child_process = require('child_process');

BufferHelper = require('bufferhelper');

cheerio = require('cheerio');

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
      var $, el, els, i, j, ref, results;
      $ = cheerio.load(bufferhelper.toString());
      els = $('.mainNavs .menu_box .reset dd a');
      results = [];
      for (i = j = 0, ref = els.length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        results.push(el = cheerio(els[i]).text());
      }
      return results;
    });
  }
};

exports.run = Spider.run;
