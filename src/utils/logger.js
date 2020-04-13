const { createLogger, transports } = require('winston');

const logger = createLogger({
  transports: [
    new transports.File({
      filename: './src/app.log',
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

module.exports = logger;
