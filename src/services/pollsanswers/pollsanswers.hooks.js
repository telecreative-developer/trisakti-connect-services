const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipPollsanswers = require('../../hooks/relationship-pollsanswers');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipPollsanswers()],
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
