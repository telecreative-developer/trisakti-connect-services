// Initializes the `pollsanswers` service on path `/pollsanswers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/pollsanswers.model');
const hooks = require('./pollsanswers.hooks');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pollsanswers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pollsanswers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pollsanswers');

  service.hooks(hooks);
};
