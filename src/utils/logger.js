const { createLogger, transports } = require('winston');

const logger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/access.log',
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

module.exports = logger;
