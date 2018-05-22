import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import sequelizeConfig from '../config/dbConfig';
import config from '../config';
import addScopes from '../helpers/addScopes';

const env = config.env;
const envConfig = sequelizeConfig[env];


let sequelize;

if(envConfig.url){
  sequelize = new Sequelize(envConfig.url, envConfig)
}else{
  sequelize = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    envConfig
  );
}


const db = {
  sequelize,
  Sequelize
};


fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) 
    && (file !== path.basename(__filename)) 
    && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

addScopes(db);

export default db;
