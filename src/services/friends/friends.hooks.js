const { authenticate } = require('feathers-authentication').hooks;

const relationshipFriends = require('../../hooks/relationship-friends');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipFriends()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
