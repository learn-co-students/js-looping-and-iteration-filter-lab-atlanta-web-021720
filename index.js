// Code your solution in this file

function findMatching(drivers, filterName) {
    let filteredDrivers = []
    filteredDrivers.push(drivers.filter(function(driver) { return driver.toLowerCase() === filterName.toLowerCase() }))
    let count = 0
    while (count < filteredDrivers.length) {
        return filteredDrivers[count++]
    }
}

function fuzzyMatch(drivers, startingLetter) {
    let filteredDrivers = []
    filteredDrivers.push(drivers.filter(function(driver) { return driver.startsWith(startingLetter) }))
    let count = 0
    while (count < filteredDrivers.length) {
        return filteredDrivers[count++]
    }
}

function matchName(drivers, name) {
    let filteredDrivers = []
    filteredDrivers.push(drivers.filter(function(driver) { return driver.name === name }))
    let count = 0
    while (count < filteredDrivers.length) {
        return filteredDrivers[count++]
    }

}