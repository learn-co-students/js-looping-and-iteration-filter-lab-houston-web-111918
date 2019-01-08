function findMatching(drivers, name) {
  return drivers.filter(function(n) {
    return n.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  let nameLen = string.length;
  return drivers.filter(function(driverName) {
    return driverName.slice(0, nameLen) === string;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
