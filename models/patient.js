'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.belongsTo(models.client, {
        foreignKey: 'client_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Patient.hasMany(models.vaccinehistory, {
        foreignKey: 'vaccinehistory_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Patient.init({
    species: DataTypes.STRING,
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    color: DataTypes.STRING,
    weight: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patient',
    tableName: 'patient'
  });
  return Patient;
};