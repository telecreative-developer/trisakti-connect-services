// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const polls = sequelizeClient.define('polls', {
    id_poll: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title_poll: {
      type: DataTypes.STRING,
      allowNull: false
    },
    thumbnail_poll: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content_poll: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  polls.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    polls.hasMany(models.pollschoices, {foreignKey: 'id_poll', sourceKey: 'id_poll'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return polls;
};
