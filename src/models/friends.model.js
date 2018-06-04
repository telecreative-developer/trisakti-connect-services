// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const friends = sequelizeClient.define('friends', {
    id_friend: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    confirm_by: {
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

  friends.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    friends.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    friends.hasMany(models.faculties, {foreignKey: 'id_faculty', sourceKey: 'users.id_faculty'});
    friends.hasMany(models.majors, {foreignKey: 'id_major', targetKey: 'id'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return friends;
};
