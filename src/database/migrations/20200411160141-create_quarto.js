"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("quartos", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      quantidade_cama: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      quantidade_pesoa_max: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      quantidade_pesoa: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      numero_quarto: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    return queryInterface.dropTable("quartos");
  }
};
