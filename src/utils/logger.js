const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: './logs/access.log',
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

module.exports = logger;
