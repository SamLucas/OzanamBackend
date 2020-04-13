module.exports = (sequelize, DataTypes) => {
  const RemediosInfos = sequelize.define("RemediosInfos", {
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT
  });

  return RemediosInfos;
};
