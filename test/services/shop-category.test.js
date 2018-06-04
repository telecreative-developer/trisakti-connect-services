const assert = require('assert');
const app = require('../../src/app');

describe('\'shop_category\' service', () => {
  it('registered the service', () => {
    const service = app.service('shop-category');

    assert.ok(service, 'Registered the service');
  });
});
