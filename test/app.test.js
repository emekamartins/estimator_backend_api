/* eslint-disable max-len */
/* eslint-disable no-undef */
const request = require('supertest');
const chai = require('chai');
const app = require('../src/app');

const { expect } = chai;

test('Get estimated covid info for region', async () => {
  const reportedCases = 674;
  const estimateData = await request(app)
    .get('/api/v1/on-covid-19')
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
  expect(estimateData.body.data).to.have.property('data');
  expect(estimateData.body.data).to.have.property('impact');
  expect(estimateData.body.data).to.have.property('severeImpact');
  expect(estimateData.body.data.impact.currentlyInfected).to.equal(reportedCases * 10);
  expect(estimateData.body.data.severeImpact.currentlyInfected).to.equal(reportedCases * 50);
});

test('Get estimated covid info for region in XML format', async () => {
  await request(app)
    .get('/api/v1/on-covid-19/xml')
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
    .expect('Content-Type', /text\/xml/);
});
