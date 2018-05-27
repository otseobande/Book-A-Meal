import winston from 'winston';
import mailer from './mailer';
import { adminEmail } from '../config';

const { format } = winston;


class EmailTransport extends winston.Transport{
  constructor(opts) {
    super(opts);
  }

  log(info, callback) {
    console.log('logged')
    setImmediate(() => {
      this.emit('logged', info);
    });

    mailer({
      from: 'Book-A-Meal <no-reply@bookameal.com>',
      to: adminEmail,
      subject: 'AN ERROR JUST OCCURED',
      text: JSON.stringify(info)
    });

    callback();
  }
};

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    // # Commented out because Heroku's filesystem is read-only
    // 
    // new winston.transports.File({
    //   filename: `${process.cwd()}\\logs\\error.log`,
    //   level: 'error',
    //   timestamp: true
    // }),
    // new winston.transports.File({
    //   filename: `${process.cwd()}\\logs\\combined.log`,
    //   timestamp: true
    // }),
    new EmailTransport({
      level: 'error'
    }),
    new winston.transports.Console({
      format: format.simple()
    })
  ]
});


export default logger;
