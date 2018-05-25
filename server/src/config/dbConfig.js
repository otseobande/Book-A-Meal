import dotenv from 'dotenv';
import logger from '../utils/logger';

dotenv.config({path: '../.env'});

const config = {
	production:{
    url: process.env.DATABASE_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    },
    logging: (msg) => logger.info(msg)
  },
  development: {
  	username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: (msg) => logger.info(msg)
  },
  test: {
  	username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    database: process.env.TEST_DB_NAME,
    host: process.env.TEST_DB_HOST,
    dialect: 'postgres',
    logging: false
  },
}

export default config;