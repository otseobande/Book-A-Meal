import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

export default {
	production:{
    use_env_variable: process.env.DATABASE_URL,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  development: {
  	username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
  	username: process.env.TEST_DB_USER || 'postgres',
    password: process.env.TEST_DB_PASS || '',
    database: process.env.TEST_DB_NAME || 'book_a_meal_test',
    host: process.env.TEST_DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false
  },
}
