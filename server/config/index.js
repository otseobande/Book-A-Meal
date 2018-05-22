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
  closeTime: process.env.CLOSE_TIME,

  mail: {
    smtpConfig: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    }
  }
 
}
export default config;