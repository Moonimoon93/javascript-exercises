const ftoc = function(degreeF) {
    let convertedDegree = ((degreeF - 32) * 5 / 9)
    if (convertedDegree % 1 != 0) {
        convertedDegree = Number(convertedDegree.toFixed(1));
    }

    return convertedDegree;
};

const ctof = function(degreeC) {
    let convertedDegree = (degreeC * 9 / 5 + 32)
    if (convertedDegree % 1 != 0) {
        convertedDegree = Number(convertedDegree.toFixed(1));
    }
    return convertedDegree;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof
};