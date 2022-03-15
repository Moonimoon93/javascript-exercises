const reverseString = function(phrase) {
    let reversePhrase = '';
    //First of all, I am going to make an array with the given phrase
    //in order to make it reverse.
    let arrPhrase = phrase.split("");
    //With split(""); string will turn into an array.
    //W/O giving a space between double quote for parameter of split method
    //I will be able to simply reverse the entire phrase w/o worrying about
    //putting space later on.
    arrPhrase = arrPhrase.reverse();
    arrPhrase = arrPhrase.join('');
    return arrPhrase;
};

// Do not edit below this line
module.exports = reverseString;