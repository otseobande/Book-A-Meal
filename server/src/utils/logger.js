/* eslint class-methods-use-this: 0 */
import winston from 'winston';
import mailer from './mailer';
import { env, adminEmail } from '../config';

const { format } = winston;

/**
 * @class EmailTransport
 */
class EmailTransport extends winston.Transport {
  /**
   * logger methods for events
   *
   * @param  {object}   info  - event info object
   * @param  {Function} callback - callback function
   * @return {undefined}  returns undefined
   */
  log(info, callback) {
    mailer({
      from: 'Book-A-Meal <no-reply@bookameal.com>',
      to: adminEmail,
      subject: `AN ERROR JUST OCCURRED (${env})`,
      text: JSON.stringify(info)
    });

    callback();
  }
}

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.json()
  ),
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
