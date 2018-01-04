// Initializes the `news` service on path `/news`
const createService = require('feathers-sequelize');
const createModel = require('../../models/news.model');
const hooks = require('./news.hooks');
const filters = require('./news.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'news',
    Model,
    paginate,
    id: 'id_news'
  };

  // Initialize our service with any options it requires
  app.use('api/v1/news', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('news');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
