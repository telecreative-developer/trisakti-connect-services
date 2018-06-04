const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipChats = require('../../hooks/relationship-chats');

module.exports = {
  before: {
    all: [authenticate('jwt'), relationshipChats()],
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
