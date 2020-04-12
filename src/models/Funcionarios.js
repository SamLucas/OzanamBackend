import bcrypt from "bcryptjs";

export default (sequelize, DataTypes) => {
  const Funcionarios = sequelize.define(
    "Funcionarios",
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      cpf: DataTypes.STRING,
      rg: DataTypes.STRING,
      sexo: DataTypes.BOOLEAN,
      telefone: DataTypes.STRING,
      endereco: DataTypes.STRING,
      funcao: {
        type: DataTypes.ENUM,
        values: ["farmaceutico", "enfermeira", "tecnico"]
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
          }
        }
      }
    }
  );

  return Funcionarios;
};
