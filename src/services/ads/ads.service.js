// Initializes the `ads` service on path `/ads`
const createService = require('feathers-sequelize');
const createModel = require('../../models/ads.model');
const hooks = require('./ads.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'ads',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ads', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('ads');

  service.hooks(hooks);
};
