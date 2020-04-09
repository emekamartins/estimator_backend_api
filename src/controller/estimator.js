/* eslint-disable max-len */
/* eslint-disable no-console */
const XML = require('xml');
const estimateFunc = require('../utils/estimatorFunc');
const convertToXml = require('../utils/xmlFunc');

exports.estimator = async (request, response) => {
  const data = request.body;

  if (!data) {
    return response.status(400).json({
      status: 'error',
      error: 'Bad request please send requested data',
    });
  }

  try {
    const result = estimateFunc(data);
    if (!result) {
      return response.status(404).json({
        status: 'error',
        error: 'No data found',
      });
    }

    return response.status(200).json({
      status: 'SuccessFul',
      data: result,
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

exports.estimatorXml = async (request, response) => {
  const data = request.body;
  response.set('Content-Type', 'text/xml');
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
  if (!data) {
    return response.status(400).send(convertedBadRequestError);
  }

  try {
    const result = estimateFunc(data);
    if (!result) {
      return response.status(404).send(convertedNotFoundError);
    }

    const convertedResult = convertToXml(result);
    return response.status(200).send(convertedResult);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return response.status(500).send(convertedBadRequestError);
  }
};

exports.logData = (request, response) => {

}
