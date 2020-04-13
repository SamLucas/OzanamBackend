module.exports = (sequelize, DataTypes) => {
  const HorariosFuncionarios = sequelize.define("HorariosFuncionarios", {
    funcionario_id: DataTypes.UUID,
    horario_medicacoes_id: DataTypes.UUID
  });

  return HorariosFuncionarios;
};
