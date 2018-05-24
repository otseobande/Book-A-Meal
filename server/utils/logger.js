import winston from 'winston';

const { format } = winston;

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new winston.transports.File({
      filename: `${process.cwd()}\\logs\\error.log`,
      level: 'error',
      timestamp: true
    }),
    new winston.transports.File({
      filename: `${process.cwd()}\\logs\\combined.log`,
      timestamp: true
    }),
    new winston.transports.Console({
      format: format.simple()
    })
  ]
});


export default logger;
