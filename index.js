// Code your solution in this file!


const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


// 
const createFareMultiplier = (multiplier) => (number) => number * multiplier

// const foo = createFareMultiplier(100)

// console.log(createFareMultiplier(5)(1.6))
// 


const fareDoubler = (number) => number * 2

const fareTripler = (number) => number * 3


const fetchSpecifiedDrivers = (arrayOfDrivers, otherFunction) => otherFunction(arrayOfDrivers);

