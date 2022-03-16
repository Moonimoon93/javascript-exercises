const palindromes = function(reverseMe) {
    //Made a function for removing punctuations
    const removePunc = (phraseArr) => {
        let temp = [];
        let collectPunc = [];
        for (let i = phraseArr.length - 1; i >= 0; i--) {
            if (phraseArr[i] == "." || phraseArr[i] == "," || phraseArr[i] == "!" || phraseArr[i] == "?" || phraseArr[i] == " ") {
                collectPunc.push(phraseArr[i]);
            } else {
                temp.push(phraseArr[i]);
            }
        }
        return temp;
    }
    let original = reverseMe.toLowerCase().split("");
    let reversed = reverseMe.toLowerCase().split("").reverse()

    // original = removePunc(original);
    console.log("original:", original, original.length);
    console.log("reversed:", reversed, reversed.length);
    original = removePunc(original).join("");
    reversed = removePunc(reversed).join("");

    if (original === reversed) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;