// Initializes the `shopcategory` service on path `/shopcategory`
const createService = require('feathers-sequelize');
const createModel = require('../../models/shopcategory.model');
const hooks = require('./shopcategory.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'shopcategory',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/shopcategory', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('shopcategory');

  service.hooks(hooks);
};
