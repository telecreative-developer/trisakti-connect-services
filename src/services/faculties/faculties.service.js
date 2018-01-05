// Initializes the `faculties` service on path `/faculties`
const createService = require('feathers-sequelize');
const createModel = require('../../models/faculties.model');
const hooks = require('./faculties.hooks');
const filters = require('./faculties.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'faculties',
    Model,
    paginate,
    id: 'id_faculty'
  };

  // Initialize our service with any options it requires
  app.use('/faculties', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('faculties');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
