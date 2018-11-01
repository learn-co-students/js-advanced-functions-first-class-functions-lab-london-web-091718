
const returnFirstTwoDrivers = drivers => drivers.slice(0,2)
// const returnFirstTwoDrivers = function (drivers) {
//   return drivers.slice(0, 2);
// };

const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



function createFareMultiplier(num) {
  return function (fare) {
    return fare * num
  }
}
//
// const createFareMultiplier = function (multiplyValue) {
//   return function (value) {
//     return multiplyValue * value;
//   };
// };

// const createFareMultiplier = multiplier => value => multiplier * value;
// const fareDoubler = value => value * 2;
// const fareTripler = value => value * 3;
// const fareDoubler = (integer) => {
//   return createFareMultiplier(integer)(2);
// }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(drivers,fun){
  return fun(drivers)
}
