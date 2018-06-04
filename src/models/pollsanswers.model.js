// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pollsanswers = sequelizeClient.define('pollsanswers', {
    idpoll_answer: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_poll: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idpoll_choice: {
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

  pollsanswers.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    pollsanswers.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    pollsanswers.hasMany(models.pollschoices, {foreignKey: 'idpoll_choice', sourceKey: 'idpoll_choice'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pollsanswers;
};
