const assert = require('assert');
const app = require('../../src/app');

describe('\'pollsanswers\' service', () => {
  it('registered the service', () => {
    const service = app.service('pollsanswers');

    assert.ok(service, 'Registered the service');
  });
});
