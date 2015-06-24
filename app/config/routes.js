var Index;

Index = require('../controllers/index');

module.exports = function(app) {
  return app.get('/', Index.index);
};
