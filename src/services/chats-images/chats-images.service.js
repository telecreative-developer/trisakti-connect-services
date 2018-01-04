// Initializes the `chats-images` service on path `/chats-images`
const hooks = require('./chats-images.hooks');
const filters = require('./chats-images.filters');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/chats/images');

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('api/v1/chats-images', blobService({Model: blobStorage}));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('chats-images');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
