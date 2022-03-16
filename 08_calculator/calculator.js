const add = function() {
    let valuesForSum = Array.from(arguments);
    const addAll = valuesForSum.reduce((a, b) => a + b, 0);
    return addAll;
};

const subtract = function() {
    let valuesForSum = Array.from(arguments);
    const subtractAll = valuesForSum.reduce((a, b) => a - b);
    return subtractAll;
};

const sum = function(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        const addAll = arr.reduce((a, b) => a + b);
        return addAll;
    }
};

const multiply = function(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        const multiplyAll = arr.reduce((a, b) => a * b);
        return multiplyAll;
    }
};

const power = function(powerMe, powerUp) {
    let powered = powerMe ** powerUp;
    return powered;
};

const factorial = function(factorialMe) {
    let answer = 1;
    if (factorialMe == 1 || factorialMe == 0) {
        return 1;
    } else {
        for (let i = factorialMe; i > 0; i--) {
            answer *= i;
        }
        return answer;
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};