import winston from 'winston';
import { env } from '../config';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ 
      filename: `${process.cwd()}\\logs\\combined.log`, 
      level: 'error',
      timestamp: true 
    }),
    new winston.transports.File({ 
      filename: `${process.cwd()}\\logs\\combined.log`,
      timestamp: true 
    })
  ]
});

if (env !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
    timestamp: true
  }));
}

export default logger;