import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';

export default {
	[env]:{
    username: 'openpg',
    password: 'openpgpwd',
    database: 'bookameal',
    host: 'localhost',
    dialect: 'postgres'
  }
}
