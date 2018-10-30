const returnFirstTwoDrivers = drivers => drivers.slice(0,2);
const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => value => multiplier * value;
const fareDoubler = value => value * 2;
const fareTripler = value => value * 3;

const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
