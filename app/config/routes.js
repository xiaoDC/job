var Admin, Index;

Index = require('../controllers/index');

Admin = require('../controllers/admin');

module.exports = function(app) {
  app.get('/', Index.index);
  return app.get('/admin', Admin.index);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLHNCQUFSOztBQUNSLEtBQUEsR0FBUSxPQUFBLENBQVEsc0JBQVI7O0FBRVIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxHQUFEO0VBRWIsR0FBRyxDQUFDLEdBQUosQ0FBUSxHQUFSLEVBQWEsS0FBSyxDQUFDLEtBQW5CO1NBRUEsR0FBRyxDQUFDLEdBQUosQ0FBUSxRQUFSLEVBQWtCLEtBQUssQ0FBQyxLQUF4QjtBQUphIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIkluZGV4ID0gcmVxdWlyZSAnLi4vY29udHJvbGxlcnMvaW5kZXgnXG5BZG1pbiA9IHJlcXVpcmUgJy4uL2NvbnRyb2xsZXJzL2FkbWluJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IChhcHApLT5cblxuICAgIGFwcC5nZXQgJy8nLCBJbmRleC5pbmRleFxuXG4gICAgYXBwLmdldCAnL2FkbWluJywgQWRtaW4uaW5kZXhcbiJdfQ==