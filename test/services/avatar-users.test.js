const assert = require('assert');
const app = require('../../src/app');

describe('\'avatar-users\' service', () => {
  it('registered the service', () => {
    const service = app.service('avatar-users');

    assert.ok(service, 'Registered the service');
  });
});
