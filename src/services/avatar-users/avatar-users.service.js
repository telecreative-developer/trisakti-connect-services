// Initializes the `avatar-users` service on path `/avatar-users`
const hooks = require('./avatar-users.hooks');
const filters = require('./avatar-users.filters');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/users/images');


module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/api/v1/avatar-users', blobService({Model: blobStorage}));
  
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('avatar-users');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
