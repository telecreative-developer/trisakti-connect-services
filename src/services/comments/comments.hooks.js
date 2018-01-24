const { authenticate } = require('feathers-authentication').hooks;

const relationshipComments = require('../../hooks/relationship-comments');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipComments()],
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
