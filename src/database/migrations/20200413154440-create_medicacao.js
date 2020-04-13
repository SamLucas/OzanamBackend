"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("medicacoes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: true
      },
      funcionario_id: {
        type: Sequelize.UUID,
        allowNull: true
      },
      medicacao_info_id: {
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
    return queryInterface.dropTable("medicacoes");
  }
};
