// Initializes the `pollschoices` service on path `/pollschoices`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pollschoices.model');
const hooks = require('./pollschoices.hooks');
const filters = require('./pollschoices.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pollschoices',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/pollschoices', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pollschoices');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
