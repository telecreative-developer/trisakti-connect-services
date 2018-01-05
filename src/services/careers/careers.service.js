// Initializes the `careers` service on path `/careers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/careers.model');
const hooks = require('./careers.hooks');
const filters = require('./careers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'careers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/careers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('careers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
