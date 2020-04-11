module.exports = (sequelize, DataTypes) => {
  const Quartos = sequelize.define("Quartos", {
    quantidade_cama: DataTypes.INTEGER,
    tipo: DataTypes.BOOLEAN,
    quantidade_pesoa_max: DataTypes.INTEGER,
    quantidade_pesoa: DataTypes.INTEGER,
    numero_quarto: DataTypes.INTEGER
  });

  return Quartos;
};
