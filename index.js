// Code your solution in this file!

  const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
  }

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2)
}

// const selectingDrivers = [...returnFirstTwoDrivers(drivers), ...returnLastTwoDrivers(drivers)]

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(integer) {
  return function(value) {
    return integer * value
  }
}

const fareDoubler = function(integer) {
  return createFareMultiplier(integer)(2)
}

const fareTripler = function(integer) {
  return createFareMultiplier(integer)(3)
}

function fetchSpecifiedDrivers(drivers, fetchDrivers) {
  if  (JSON.stringify(fetchDrivers(drivers)) === JSON.stringify(selectingDrivers[0](drivers)) || JSON.stringify(fetchDrivers(drivers)) === JSON.stringify(selectingDrivers[1](drivers))) {
    return fetchDrivers(drivers)
  }
}
