'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingresso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Pedido);
      this.belongsTo(models.Evento);
    }
  };
  Ingresso.init({
    situacao: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Ingresso',
  });
  return Ingresso;
};