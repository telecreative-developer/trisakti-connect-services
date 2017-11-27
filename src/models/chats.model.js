// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const chats = sequelizeClient.define('chats', {
    id_chat: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_pchat: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status_deleted: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted_by: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  chats.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    chats.belongsTo(models.users, {foreignKey: 'id_user'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return chats;
};
