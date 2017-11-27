const assert = require('assert');
const app = require('../../src/app');

describe('\'faculties\' service', () => {
  it('registered the service', () => {
    const service = app.service('faculties');

    assert.ok(service, 'Registered the service');
  });
});
