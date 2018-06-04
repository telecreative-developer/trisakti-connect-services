const assert = require('assert');
const app = require('../../src/app');

describe('\'product-images\' service', () => {
  it('registered the service', () => {
    const service = app.service('product-images');

    assert.ok(service, 'Registered the service');
  });
});
