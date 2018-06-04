// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const friendsrequest = sequelizeClient.define('friendsrequest', {
    id_friendrequest: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    request_to: {
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

  friendsrequest.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    friendsrequest.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});    
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return friendsrequest;
};
