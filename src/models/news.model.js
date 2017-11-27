// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const news = sequelizeClient.define('news', {
    id_news: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_category: {
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

  news.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    news.hasMany(models.users, {foreignKey: 'id', sourceKey: 'id'});
    news.hasMany(models.categories, {foreignKey: 'id_category', sourceKey: 'id_category'});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return news;
};
