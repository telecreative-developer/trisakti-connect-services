const { authenticate } = require('feathers-authentication').hooks;

const relationshipFriendsrequest = require('../../hooks/relationship-friendsrequest');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipFriendsrequest()],
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
