// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  // return [drivers[0], drivers[1]];
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(integer){
  return function(num) {
    return integer * num;
  }
}

const fareDoubler = (integer) => {
  return createFareMultiplier(integer)(2);
}

const fareTripler = (integer) => {
  return createFareMultiplier(integer)(3);
}



const fetchSpecifiedDrivers = (arrayOfDrivers, FirstTwoDrivers) => FirstTwoDrivers(arrayOfDrivers)
