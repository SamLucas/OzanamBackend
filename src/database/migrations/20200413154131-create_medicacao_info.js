"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("medicacoes_infos", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      dosagem: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      intervalo: {
        type: Sequelize.ENUM,
        values: ["4h", "8h", "16h", "12h", "24"],
        allowNull: true
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      residente_id: {
        type: Sequelize.UUID,
        allowNull: true
      },
      remedio_id: {
        type: Sequelize.UUID,
        allowNull: true
      },
      horario_medicacao_id: {
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
    return queryInterface.dropTable("medicacoes_infos");
  }
};
