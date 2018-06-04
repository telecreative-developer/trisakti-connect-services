const assert = require('assert');
const app = require('../../src/app');

describe('\'chats-images\' service', () => {
  it('registered the service', () => {
    const service = app.service('chats-images');

    assert.ok(service, 'Registered the service');
  });
});
