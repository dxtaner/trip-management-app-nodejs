// logger.js

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

// Create logger for error logs
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    timestamp(),
    printf(
      ({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`
    )
  ),
  transports: [new transports.File({ filename: 'error.log' })],
});

// Create logger for combined logs
const combinedLogger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    printf(
      ({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`
    )
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = { errorLogger, combinedLogger };
