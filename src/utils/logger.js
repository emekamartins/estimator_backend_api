const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  format: format.combine(
    format.printf((info) => `${info.message}`),
  ),
  transports: [
    new transports.File({
      filename: './src/app.log',
      maxsize: 5242880,
      json: false,
      maxFiles: 5,
    }),
  ],
});

module.exports = logger;
