module.exports = (sequelize, DataTypes) => {
  const Residente = sequelize.define("Residente", {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    sexo: DataTypes.BOOLEAN,
    rg: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    telefone: DataTypes.STRING
  });

  return Residente;
};
