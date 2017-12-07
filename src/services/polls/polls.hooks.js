const { authenticate } = require('feathers-authentication').hooks;

const relationshipPolls = require('../../hooks/relationship-polls');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipPolls()],
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
