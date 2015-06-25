var Admin, Index;

Index = require('../controllers/index');

Admin = require('../controllers/admin');

module.exports = function(app) {
  app.get('/', Index.index);
  return app.get('/admin', Admin.index);
};
