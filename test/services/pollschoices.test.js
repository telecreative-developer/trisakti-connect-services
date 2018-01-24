const assert = require('assert');
const app = require('../../src/app');

describe('\'pollschoices\' service', () => {
  it('registered the service', () => {
    const service = app.service('pollschoices');

    assert.ok(service, 'Registered the service');
  });
});
