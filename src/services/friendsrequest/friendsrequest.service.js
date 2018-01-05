// Initializes the `friendsrequest` service on path `/friendsrequest`
const createService = require('feathers-sequelize');
const createModel = require('../../models/friendsrequest.model');
const hooks = require('./friendsrequest.hooks');
const filters = require('./friendsrequest.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'friendsrequest',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/friendsrequest', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('friendsrequest');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
