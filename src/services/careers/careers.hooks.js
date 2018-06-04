const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipCareers = require('../../hooks/relationship-careers');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipCareers()],
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
