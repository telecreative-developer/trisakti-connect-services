const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipNews = require('../../hooks/relationship-news');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipNews()],
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
