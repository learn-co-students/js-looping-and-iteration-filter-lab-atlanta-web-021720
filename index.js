
function findMatching(arr, name) {
    let new_arr = arr.filter( driver => driver.toUpperCase() === name.toUpperCase());
    return new_arr;
}

function fuzzyMatch(arr, string) {
    const n = string.length;
    const new_arr = arr.filter( driver => driver.slice(0, n) === string);
    return new_arr;
}

function matchName(arr, name) {
    const new_arr = arr.filter(driver => driver.name === name);
    return new_arr;
}