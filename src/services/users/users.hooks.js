const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { restrictToOwner } = require('feathers-authentication-hooks');

const { hashPassword } = require('feathers-authentication-local').hooks;
const restrict = [  
  restrictToOwner({
    idField: 'id',
    ownerField: 'id'
  })
];

const relationshipUsers = require('../../hooks/relationship-users');

module.exports = {
  before: {
    all: [relationshipUsers()],
    find: [],
    get: [ authenticate('jwt')],
    create: [ hashPassword() ],
    update: [ hashPassword() ],
    patch: [ authenticate('jwt'), hashPassword() ],
    remove: [ authenticate('jwt')]
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('password')
      )
    ],
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
