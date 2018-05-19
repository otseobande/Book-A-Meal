import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    url: process.env.DATABASE_URL
  },
  test: {
    db: {
      username: process.env.TEST_DB_USER,
      password: process.env.TEST_DB_PASS,
      name: process.env.TEST_DB_NAME,
      host: process.env.TEST_DB_HOST,
    }
  },
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiry: process.env.JWT_EXPIRY,
  orderExpiry: process.env.ORDER_EXPIRY,
  openTime: process.env.OPEN_TIME,
  closeTime: process.env.CLOSE_TIME
}
export default config;