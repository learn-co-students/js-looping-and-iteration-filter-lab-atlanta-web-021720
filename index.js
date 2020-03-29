// Code your solution in this file
function findMatching(drivers, strings) {
    const arr = [];
    for (const user of drivers) {
        if (user.toLowerCase() === strings.toLowerCase()) {
            arr.push(user);
        }
    }
    return arr;
}

function fuzzyMatch(drivers, strings) {
    return drivers.filter(function (char) {return strings[0] === char[0]});
}

function matchName(list, name) {
    return list.filter(function (driver) {
        return driver.name === name
    });
}