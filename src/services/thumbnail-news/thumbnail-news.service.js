// Initializes the `thumbnail-news` service on path `/thumbnail-news`
const hooks = require('./thumbnail-news.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./public/files/news/images');

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/thumbnail-news', blobService({Model: blobStorage}));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('thumbnail-news');

  service.hooks(hooks);
};
