// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pollschoices = sequelizeClient.define('pollschoices', {
    idpoll_choice: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncement: true
    },
    candidate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_poll: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  pollschoices.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pollschoices;
};
