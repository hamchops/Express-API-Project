'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vaccinehistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vaccinehistory.belongsTo(models.patient, {
        foreignKey: 'owner_id',
        as: 'twerts',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  vaccinehistory.init({
    vaccine: DataTypes.STRING,
    administered: DataTypes.DATE,
    expiration: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'vaccinehistory',
    tableName: 'vaccinehistory'
  });
  return vaccinehistory;
};