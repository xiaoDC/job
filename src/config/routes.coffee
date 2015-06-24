Index = require '../controllers/index'

module.exports = (app)->

    app.get '/', Index.index
