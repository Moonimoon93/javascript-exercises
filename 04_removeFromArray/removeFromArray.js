const removeFromArray = function(array) {
    let removeThese = Array.from(arguments);
    for (let i = 1; i < removeThese.length; i++) {
        if (array.indexOf(removeThese[i]) != -1) {
            let location = array.indexOf(removeThese[i])
            array.splice(location, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;