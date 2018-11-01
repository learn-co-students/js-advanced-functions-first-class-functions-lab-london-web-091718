// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    const driver_array = [];
    driver_array.push(drivers[0]);
    driver_array.push(drivers[1]);
    return driver_array
}

const returnLastTwoDrivers = function(drivers){
    const driver_array = [];
    driver_array.push(drivers.slice(-2));
    return driver_array[0]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
  return function multiplyFare(fare){
    return fare*int;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, fn){
  return fn(drivers)
}
