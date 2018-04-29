// Initializes the `product-images` service on path `/product-images`
const hooks = require('./product-images.hooks')
const blobService = require('feathers-blob')
const fs = require('fs-blob-store')
const blobStorage = fs('./public/files/shop/images')

module.exports = function(app) {
  // Initialize our service with any options it requires
  app.use('/product-images', blobService({ Model: blobStorage }))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('product-images')

  service.hooks(hooks)
}
