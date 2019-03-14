const returnFirstTwoDrivers = function(drivers) {return drivers.slice(0,2)}
const returnLastTwoDrivers = function(drivers) {return drivers.slice((drivers.length - 2),drivers.length)}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(multiplier) {return function(fare) {return multiplier * fare }}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const fetchSpecifiedDrivers = function(drivers, newFunction) {return newFunction(drivers)}
