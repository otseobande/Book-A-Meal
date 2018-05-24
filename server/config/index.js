import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.NODE_ENV,
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
  },
  adminEmail: process.env.ADMIN_EMAIL,
}
export default config;