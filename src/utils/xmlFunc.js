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

        currentlyinfected: result.impact.currentlyInfected,
        infectionsbyrequestedtime: result.impact.infectionsByRequestedTime,
        severecasesbyrequestedtime: result.impact.severeCasesByRequestedTime,
        hospitalbedsbyrequestedtime: result.impact.hospitalBedsByRequestedTime,
        casesforicubyrequestedtime: result.impact.casesForICUByRequestedTime,
        casesforventilatorsbyrequestedtime: result.impact.casesForVentilatorsByRequestedTime,
        dollarsinflight: result.impact.dollarsInFlight,

      },


      severeimpact: {

        currentlyinfected: result.severeImpact.currentlyInfected,
        infectionsbyrequestedtime: result.severeImpact.infectionsByRequestedTime,
        severecasesbyrequestedtime: result.severeImpact.severeCasesByRequestedTime,
        hospitalbedsbyrequestedtime: result.severeImpact.hospitalBedsByRequestedTime,
        casesforicubyrequestedtime: result.severeImpact.casesForICUByRequestedTime,
        casesforventilatorsbyrequestedtime: result.severeImpact.casesForVentilatorsByRequestedTime,
        dollarsinflight: result.severeImpact.dollarsInFlight,

      },
    },

  };


  const convertedResult = js2xmlparser.parse('response', xmlResult);

  return convertedResult;
};


module.exports = convertToXml;
