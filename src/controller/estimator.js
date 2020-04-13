/* eslint-disable max-len */
/* eslint-disable no-console */
const XML = require('xml');
// const path = require('path');
const logger = require('../utils/logger');
const estimateFunc = require('../utils/estimatorFunc');
const convertToXml = require('../utils/xmlFunc');

exports.estimator = (request, response) => {
  const estimateData = request.body;
  if (!estimateData) {
    return response.status(400).json({
      status: 'error',
      error: 'Bad request please send requested data',
    });
  }

  try {
    const estimatedData = estimateFunc(estimateData);
    if (!estimatedData) {
      return response.status(404).json({
        status: 'error',
        error: 'No data found',
      });
    }

    const { data, impact, severeImpact } = estimatedData;

    return response.status(200).json({
      data,
      impact,
      severeImpact,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return response.status(500).json({
      status: 'error',
      error,
    });
  }
};

exports.estimatorXml = (request, response) => {
  const estimateData = request.body;
  response.set('Content-Type', 'application/xml');
  const badRequest = [{
    error: [
      { status: 'error' },
      { error: 'Bad Request' },
    ],
  }];
  const notFound = [{
    error: [
      { status: 'error' },
      { error: 'Not Found' },
    ],
  }];
  const convertedBadRequestError = XML(badRequest);
  const convertedNotFoundError = XML(notFound);
  if (!estimateData) {
    return response.status(400).send(convertedBadRequestError);
  }

  try {
    const data = estimateFunc(estimateData);
    if (!data) {
      return response.status(404).send(convertedNotFoundError);
    }

    const convertedResult = convertToXml(data);
    return response.status(200).send(convertedResult);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return response.status(500).send(convertedBadRequestError);
  }
};

// const appRoot = path.dirname(require.main.filename);
exports.logMessage = (request, response) => {
  response.set('Content-Type', 'text/plain; charset=utf-8');
  const options = {
    from: new Date(),
    limit: 20,
    start: 0,
    order: 'desc',
    fields: ['message'],
  };

  logger.query(options, (err, results) => {
    if (err) {
      throw err;
    }

    const arr = [];
    results.file.forEach((result) => {
      arr.push(result.message);
    });

    const string = arr.join('\n');
    response.status(200).send(string);
  });
};
