module.exports = (sequelize, DataTypes) => {
  const Residentes = sequelize.define("Residentes", {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    sexo: DataTypes.BOOLEAN,
    rg: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    telefone: DataTypes.STRING
  });

  return Residentes;
};
