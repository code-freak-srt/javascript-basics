function lifeInWeeks(age) {
    var remainAge = 90 - age;
    var remainAgeDays = remainAge * 365;
    var month = remainAge * 12;
    var weeks = remainAge * 7;
    console.log("remaining months: " + month + " remaining weeks: " + weeks + " remaining days: " + remainAgeDays);
}

lifeInWeeks(22);