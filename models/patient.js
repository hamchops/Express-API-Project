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
      Patient.belongsTo(models.Client, {
        foreignKey: 'owner_id',
        as: 'twerts',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Patient.hasMany(models.VaccineHistory, {
        foreignKey: 'patient_id',
        as: 'twerts',
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
    modelName: 'Patient',
  });
  return Patient;
};