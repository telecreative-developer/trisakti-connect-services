const { authenticate } = require('@feathersjs/authentication').hooks;

const relationshipShop = require('../../hooks/relationship-shop');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [relationshipShop()],
    get: [relationshipShop()],
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
