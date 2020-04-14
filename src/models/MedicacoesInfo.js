module.exports = (sequelize, DataTypes) => {
  const MedicacoesInfo = sequelize.define("MedicacoesInfo", {
    dosagem: DataTypes.INTEGER,
    intervalo: {
      type: DataTypes.ENUM,
      values: ["4h", "8h", "16h", "12h", "24"],
      allowNull: true
    },
    status: DataTypes.BOOLEAN,
    residente_id: DataTypes.UUID,
    remedio_id: DataTypes.UUID,
    horario_medicacao_id: DataTypes.UUID
  });

  return MedicacoesInfo;
};
