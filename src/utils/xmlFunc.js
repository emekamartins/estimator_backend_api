/* eslint-disable max-len */
// const XML = require('xml');
const js2xmlparser = require('js2xmlparser');

const convertToXml = (result) => {
  const xmlResult = {

    data:
          {

            region: {

              name: result.data.region.name,
              avgage: 19.7,
              avgdailyincomeinusd: 5,
              avgdailyincomepopulation: 0.71,
            },

            periodtype: result.data.periodType,
            timetoelapse: result.data.timeToElapse,
            reportedcases: result.data.reportedCases,
            population: result.data.population,
            totalhospitalbeds: result.data.totalHospitalBeds,
          },

    estimate: {
      impact: {

        currentlyinfected: result.estimate.impact.currentlyInfected,
        infectionsbyrequestedtime: result.estimate.impact.infectionsByRequestedTime,
        severecasesbyrequestedtime: result.estimate.impact.severeCasesByRequestedTime,
        hospitalbedsbyrequestedtime: result.estimate.impact.hospitalBedsByRequestedTime,
        casesforicubyrequestedtime: result.estimate.impact.casesForICUByRequestedTime,
        casesforventilatorsbyrequestedtime: result.estimate.impact.casesForVentilatorsByRequestedTime,
        dollarsinflight: result.estimate.impact.dollarsInFlight,

      },


      severeimpact: {

        currentlyinfected: result.estimate.severeImpact.currentlyInfected,
        infectionsbyrequestedtime: result.estimate.severeImpact.infectionsByRequestedTime,
        severecasesbyrequestedtime: result.estimate.severeImpact.severeCasesByRequestedTime,
        hospitalbedsbyrequestedtime: result.estimate.severeImpact.hospitalBedsByRequestedTime,
        casesforicubyrequestedtime: result.estimate.severeImpact.casesForICUByRequestedTime,
        casesforventilatorsbyrequestedtime: result.estimate.severeImpact.casesForVentilatorsByRequestedTime,
        dollarsinflight: result.estimate.severeImpact.dollarsInFlight,

      },
    },

  };


  const convertedResult = js2xmlparser.parse('data', xmlResult);

  return convertedResult;
};


module.exports = convertToXml;
