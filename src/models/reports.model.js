// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const reports = sequelizeClient.define(
    'reports',
    {
      id_report: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false
      },
      graduated: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_major: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_faculty: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  reports.associate = function(models) {
    // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return reports;
};
