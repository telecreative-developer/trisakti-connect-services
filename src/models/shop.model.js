// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient')
  const shop = sequelizeClient.define(
    'shop',
    {
      shop_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      shopcategory_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status:{
        type: DataTypes.BOOLEAN,
	allowNull: false,
	defaultValue: false
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        }
      }
    }
  )

  // eslint-disable-next-line no-unused-vars
  shop.associate = function(models) {
    // Define associations here
    shop.hasMany(models.shopcategory, {
      foreignKey: 'shopcategory_id',
      sourceKey: 'shopcategory_id'
    })
    shop.hasMany(models.users, {
      foreignKey: 'id',
      sourceKey: 'id'
    })
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  }

  return shop
}
