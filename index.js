// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  return function(fare) {
    return fare * num;
  }
}

function fareDoubler(fare) {
  return fare * 2;
}

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, rtn) {
  return rtn(drivers);
}
