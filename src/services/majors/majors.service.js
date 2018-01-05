// Initializes the `majors` service on path `/majors`
const createService = require('feathers-sequelize');
const createModel = require('../../models/majors.model');
const hooks = require('./majors.hooks');
const filters = require('./majors.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'majors',
    Model,
    paginate,
    id: 'id_major'
  };

  // Initialize our service with any options it requires
  app.use('/majors', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('majors');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
