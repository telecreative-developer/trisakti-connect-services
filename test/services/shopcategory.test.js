const assert = require('assert');
const app = require('../../src/app');

describe('\'shopcategory\' service', () => {
  it('registered the service', () => {
    const service = app.service('shopcategory');

    assert.ok(service, 'Registered the service');
  });
});
