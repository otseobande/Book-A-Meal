import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/config';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const envConfig = config[env];

const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  envConfig
);

const db = {
  sequelize,
  Sequelize
};


fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
