"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("residentes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sexo: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: true
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      quarto_id: {
        type: Sequelize.UUID,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("residentes");
  }
};
