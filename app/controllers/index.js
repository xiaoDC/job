exports.index = function(req, res) {
  return res.render('index');
};

exports.job = function(req, res) {
  return res.send('Spider');
};
