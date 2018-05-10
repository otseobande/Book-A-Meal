const config = {
	production:{
    //use_env_variable: process.env.DATABASE_URL,
    username: 'bvhybfqjrocgck',
    password: 'c90f03cb3d1201a0a9f0058f85dfcf2a5d9c92135ffe29c584e5fa5b0cbb07ef',
    database: 'ddqk6bagksufkg',
    host: 'ec2-50-19-224-165.compute-1.amazonaws.com',
    port: '5432',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    }
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

export default config;