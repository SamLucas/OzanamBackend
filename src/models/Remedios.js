module.exports = (sequelize, DataTypes) => {
  const Remedios = sequelize.define("Remedios", {
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT
  });

  return Remedios;
};
