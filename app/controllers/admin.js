exports.index = function(req, res) {
  return res.render('admin', {
    title: '后台管理'
  });
};
