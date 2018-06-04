const assert = require('assert');
const app = require('../../src/app');

describe('\'thumbnail-news\' service', () => {
  it('registered the service', () => {
    const service = app.service('thumbnail-news');

    assert.ok(service, 'Registered the service');
  });
});
