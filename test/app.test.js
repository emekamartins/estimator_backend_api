/* eslint-disable max-len */
/* eslint-disable no-undef */
const request = require('supertest');
const chai = require('chai');
const app = require('../src/app');

const { expect } = chai;

test('Get estimated covid info for region', async () => {
  const estimateData = await request(app)
    .post('/api/v1/on-covid-19')
    .send({
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71,
      },
      periodType: 'days',
      timeToElapse: 58,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614,
    })
    .expect(200);
  expect(estimateData.body).to.have.property('estimate');
  expect(estimateData.body).to.have.property('data');
  expect(estimateData.body.estimate).to.have.property('impact');
  expect(estimateData.body.estimate).to.have.property('severeImpact');
});

test('Get estimated covid info for region in XML format', async () => {
  await request(app)
    .post('/api/v1/on-covid-19/xml')
    .send({
      region: {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71,
      },
      periodType: 'days',
      timeToElapse: 58,
      reportedCases: 674,
      population: 66622705,
      totalHospitalBeds: 1380614,
    })
    .expect(200)
    .expect('Content-Type', /application\/xml/);
});
