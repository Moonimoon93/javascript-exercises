const sumAll = function(fromHere, toThere) {
    let sum = 0;
    //Validating whether the correcct type of parameters is provided or not.
    if (fromHere < 0 || toThere < 0) {
        return "ERROR"
    } else if (typeof fromHere != "number" || typeof toThere != "number") {
        return "ERROR"
    }

    if (fromHere < toThere) {
        let howMany = toThere - fromHere + 1;
        for (let i = 0; i < howMany; i++) {
            sum += fromHere;
            fromHere++;
        }
    } else if (fromHere > toThere) {
        let howMany = fromHere - toThere + 1;
        for (let i = 0; i < howMany; i++) {
            sum += toThere;
            toThere++;
        }
    } else if (fromHere === toThere) {
        sum = fromHere;
        return sum
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;