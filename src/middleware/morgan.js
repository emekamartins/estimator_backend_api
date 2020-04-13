/* eslint-disable no-underscore-dangle */
const morgan = require('morgan');
const logger = require('../utils/logger');

morgan.token('time', (req, res) => {
  if (!res._header || !req._startAt) return '';
  const diff = process.hrtime(req._startAt);
  let ms = diff[0] * 1e3 + diff[1] * 1e-6;

  // ms = ms.toFixed(3);

  // const timeLength = 8; // length of final string
  // format result:
  ms = Math.trunc((`${ms}`));

  if (ms < 10) {
    ms = `0${ms}`;
  }

  return (`${ms}`);
});

logger.stream = {
  write: (message) => logger.info(message.substring(0, message.lastIndexOf('\n'))),
};

const data = ':method \t :url \t :status \t :time ms';

module.exports = morgan(
  data,
  { stream: logger.stream },
);
