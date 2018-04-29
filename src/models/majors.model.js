// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const majors = sequelizeClient.define('majors', {
    id_major: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_faculty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: 'faculties',
        key: 'id_faculty'
      }
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  majors.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    majors.hasMany(models.faculties, {foreignKey: 'id_faculty', sourceKey: 'id_faculty'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return majors;
};
