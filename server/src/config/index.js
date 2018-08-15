import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiry: process.env.JWT_EXPIRY,
  orderModificationPeriod: process.env.ORDER_MODIFICATION_PERIOD,
  openTime: process.env.OPEN_TIME,
  closeTime: process.env.CLOSE_TIME,
  appUrl: process.env.APP_URL,
  mail: {
    smtpConfig: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    }
  },
  adminEmail: process.env.ADMIN_EMAIL
};

if (process.env.HEROKU_APP_NAME) {
  config.appUrl = `https//${process.env.HEROKU_APP_NAME}.herokuapp.com`;
};

export default config;
