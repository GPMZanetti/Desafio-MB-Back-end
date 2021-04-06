'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, {
        as: 'usuario',
        foreignKey: 'idUsuario',
      });
      this.hasMany(models.Ingresso);
    }
  };
  Evento.init({
    nome: DataTypes.STRING,
    local: DataTypes.STRING,
    horario: DataTypes.DATE,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};