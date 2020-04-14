module.exports = (sequelize, DataTypes) => {
  const Remedios = sequelize.define("Remedios", {
    quantidade: DataTypes.INTEGER,
    tipo: {
      type: DataTypes.ENUM,
      values: ["gota", "comprimido", "miligramas", "gramas"]
    },
    remedios_info_id: DataTypes.UUID
  });

  return Remedios;
};
