const assert = require('assert');
const app = require('../../src/app');

describe('\'friendsrequest\' service', () => {
  it('registered the service', () => {
    const service = app.service('friendsrequest');

    assert.ok(service, 'Registered the service');
  });
});
