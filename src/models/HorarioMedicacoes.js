module.exports = (sequelize, DataTypes) => {
  const HorarioMedicacoes = sequelize.define("HorarioMedicacoes", {
    horario: DataTypes.TIME
  });

  return HorarioMedicacoes;
};
