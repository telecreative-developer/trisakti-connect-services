// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    nim: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kecamatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kelurahan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    provinsi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    birth: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birth_place: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    graduated: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_major: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_faculty: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  users.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    users.belongsTo(models.majors, {foreignKey: 'id_major'});
    users.belongsTo(models.faculties, {foreignKey: 'id_faculty'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
