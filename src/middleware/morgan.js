const morgan = require('morgan');
const logger = require('../utils/logger');

logger.stream = {
  write: (message) => logger.info(message.substring(0, message.lastIndexOf('\n'))),
};

const data = ':method \t :url \t :status \t :response-time ms';

module.exports = morgan(
  data,
  { stream: logger.stream },
);
