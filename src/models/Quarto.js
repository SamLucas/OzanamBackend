module.exports = (sequelize, DataTypes) => {
  const Quarto = sequelize.define("Quarto", {
    quantidade_cama: DataTypes.INTEGER,
    tipo: DataTypes.BOOLEAN,
    quantidade_pesoa_max: DataTypes.INTEGER,
    quantidade_pesoa: DataTypes.INTEGER,
    numero_quarto: DataTypes.INTEGER
  });

  // Quarto.hasOne("Residente", {
  //   foreignKey: "quarto_id",
  //   as: "quartos"
  // });

  return Quarto;
};
