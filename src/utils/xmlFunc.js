/* eslint-disable max-len */
const XML = require('xml');

const convertToXml = (result) => {
  const xmlResult = [{
    results: [
      {
        data:
          [
            {
              region: [

                { name: result.data.region.name },
                { avgage: 19.7 },
                { avgdailyincomeinusd: 5 },
                { avgdailyincomepopulation: 0.71 },
              ],
            },
            { periodtype: result.data.periodType },
            { timetoelapse: result.data.timeElapse },
            { reportedcases: result.data.reportedCases },
            { population: result.data.population },
            { totalhospitalbeds: result.data.totalHospitalBeds },
          ],
      },
      {
        impact: [

          { currentlyinfected: result.impact.currentlyInfected },
          { infectionsbyrequestedtime: result.impact.infectionsByRequestedTime },
          { severecasesbyrequestedtime: result.impact.severeCasesByRequestedTime },
          { hospitalbedsbyrequestedtime: result.impact.hospitalBedsByRequestedTime },
          { casesforicubyrequestedtime: result.impact.casesForICUByRequestedTime },
          { casesforventilatorsbyrequestedtime: result.impact.casesForVentilatorsByRequestedTime },
          { dollarsinflight: result.impact.dollarsInFlight },

        ],
      },
      {
        severeimpact: [

          { currentlyinfected: result.severeImpact.currentlyInfected },
          { infectionsbyrequestedtime: result.severeImpact.infectionsByRequestedTime },
          { severecasesbyrequestedtime: result.severeImpact.severeCasesByRequestedTime },
          { hospitalbedsbyrequestedtime: result.severeImpact.hospitalBedsByRequestedTime },
          { casesforicubyrequestedtime: result.severeImpact.casesForICUByRequestedTime },
          { casesforventilatorsbyrequestedtime: result.severeImpact.casesForVentilatorsByRequestedTime },
          { dollarsinflight: result.severeImpact.dollarsInFlight },

        ],
      },
    ],
  }];

  const convertedResult = XML(xmlResult);

  return convertedResult;
};

module.exports = convertToXml;
