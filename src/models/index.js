"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/database");
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models
db.Quartos = require("./Quartos")(sequelize, Sequelize);
db.Residentes = require("./Residentes")(sequelize, Sequelize);
// db.Funcionarios = require("./Funcionarios")(sequelize, Sequelize);
// db.HorarioMedicacoes = require("./HorarioMedicacoes")(sequelize, Sequelize);

// Relations
db.Residentes.belongsTo(db.Quartos);
db.Quartos.hasMany(db.Residentes);

// db.HorarioMedicacoes.belongsTo(db.Funcionarios);
// db.Funcionarios.hasMany(db.HorarioMedicacoes);

module.exports = db;
