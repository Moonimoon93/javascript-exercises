const repeatString = function(phrase, times) {
    let emptyStr = '';
    while (times >= 0) {
        for (let i = 0; i < times; i++) {
            emptyStr += phrase;
        }
        return emptyStr;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;