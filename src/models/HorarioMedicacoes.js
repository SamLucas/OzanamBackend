import bcrypt from "bcryptjs";

module.exports = (sequelize, DataTypes) => {
  const HorarioMedicacoes = sequelize.define("HorarioMedicacoes", {
    horario: DataTypes.TIME,
    funcionario_id: DataTypes.UUID
  });

  return HorarioMedicacoes;
};
