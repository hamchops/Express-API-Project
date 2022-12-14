'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.hasMany(models.patient,{
        foreignKey: 'client_id',
        // sourceKey: 'client_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Client.hasMany(models.vaccinehistory, {
        foreignKey: 'vaccinehistory_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Client.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      alloNull: false,
      validate: {
        isEmail: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
}
  },
  {
    sequelize,
    modelName: 'client',
    tableName: 'client'
  });
  return Client;
};