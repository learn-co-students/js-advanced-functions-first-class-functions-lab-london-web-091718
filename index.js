// Code your solution in this file!


const returnFirstTwoDrivers = (array) => [array[0], array[1]]

const returnLastTwoDrivers = (array) => [array[array.length - 2], array[array.length - 1]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (number) => function fareQuintupler (fare) {
    return number * fare 
}

const fareDoubler = (fare) => fare * 2

const fareTripler = (fare) => fare * 3

const fetchSpecifiedDrivers = (array, func) => func(array)
