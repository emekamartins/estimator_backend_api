/* eslint-disable max-len */
const estimateCurrentlyInfected = (data) => {
  const cases = data;
  const impact = {};
  const severeImpact = {};
  const impactEstimate = 10;
  const severeImpactEstimate = 50;
  const bedSpacePercentDeduction = (35 / 100) * cases.totalHospitalBeds;


  impact.currentlyInfected = cases.reportedCases * impactEstimate;
  severeImpact.currentlyInfected = cases.reportedCases * severeImpactEstimate;
  if (cases.periodType === 'days') {
    const value = Math.trunc(cases.timeToElapse / 3);

    // impact
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    const impactBed = +(bedSpacePercentDeduction - impact.severeCasesByRequestedTime).toFixed(2);
    impact.hospitalBedsByRequestedTime = Math.trunc(impactBed);
    impact.casesForICUByRequestedTime = Math.trunc((5 / 100) * impact.infectionsByRequestedTime);
    impact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * impact.infectionsByRequestedTime);
    const impactOnEconomy = (impact.infectionsByRequestedTime * cases.region.avgDailyIncomePopulation * cases.region.avgDailyIncomeInUSD) / cases.timeToElapse;
    impact.dollarsInFlight = Math.trunc(impactOnEconomy);

    // severeImpact
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    const severeBed = +(bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime).toFixed(2);
    severeImpact.hospitalBedsByRequestedTime = Math.trunc(severeBed);
    severeImpact.casesForICUByRequestedTime = Math.trunc((5 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * severeImpact.infectionsByRequestedTime);
    const severeImpactOnEconomy = (severeImpact.infectionsByRequestedTime * cases.region.avgDailyIncomePopulation * cases.region.avgDailyIncomeInUSD) / cases.timeToElapse;
    severeImpact.dollarsInFlight = Math.trunc(severeImpactOnEconomy);
  }

  if (cases.periodType === 'weeks') {
    const totalTimeElapse = cases.timeToElapse * 7;
    const value = Math.trunc(totalTimeElapse / 3);

    // impact
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    const impactBed = +(bedSpacePercentDeduction - impact.severeCasesByRequestedTime).toFixed(2);
    impact.hospitalBedsByRequestedTime = Math.trunc(impactBed);
    impact.casesForICUByRequestedTime = Math.trunc((5 / 100) * impact.infectionsByRequestedTime);
    impact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * impact.infectionsByRequestedTime);
    const impactOnEconomy = (impact.infectionsByRequestedTime * cases.region.avgDailyIncomePopulation * cases.region.avgDailyIncomeInUSD) / totalTimeElapse;
    impact.dollarsInFlight = Math.trunc(impactOnEconomy);

    // severeImpact
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    const severeBed = +(bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime).toFixed(2);
    severeImpact.hospitalBedsByRequestedTime = Math.trunc(severeBed);
    severeImpact.casesForICUByRequestedTime = Math.trunc((5 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * severeImpact.infectionsByRequestedTime);
    const severeImpactOnEconomy = (severeImpact.infectionsByRequestedTime * cases.region.avgDailyIncomePopulation * cases.region.avgDailyIncomeInUSD) / totalTimeElapse;
    severeImpact.dollarsInFlight = Math.trunc(severeImpactOnEconomy);
  }

  if (cases.periodType === 'months') {
    const totalTimeElapse = cases.timeToElapse * 30;
    const value = Math.trunc(totalTimeElapse / 3);
    // impact
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    const impactBed = +(bedSpacePercentDeduction - impact.severeCasesByRequestedTime).toFixed(2);
    impact.hospitalBedsByRequestedTime = Math.trunc(impactBed);
    impact.casesForICUByRequestedTime = Math.trunc((5 / 100) * impact.infectionsByRequestedTime);
    impact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * impact.infectionsByRequestedTime);
    const impactOnEconomy = (impact.infectionsByRequestedTime * cases.region.avgDailyIncomePopulation * cases.region.avgDailyIncomeInUSD) / totalTimeElapse;
    impact.dollarsInFlight = Math.trunc(impactOnEconomy);

    // severeImpact
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    const severeBed = +(bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime).toFixed(2);
    severeImpact.hospitalBedsByRequestedTime = Math.trunc(severeBed);
    severeImpact.casesForICUByRequestedTime = Math.trunc((5 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * severeImpact.infectionsByRequestedTime);
    const severeImpactOnEconomy = (severeImpact.infectionsByRequestedTime * cases.region.avgDailyIncomePopulation * cases.region.avgDailyIncomeInUSD) / totalTimeElapse;
    severeImpact.dollarsInFlight = Math.trunc(severeImpactOnEconomy);
  }


  return {
    data,
    impact,
    severeImpact,
  };
};

module.exports = estimateCurrentlyInfected;
