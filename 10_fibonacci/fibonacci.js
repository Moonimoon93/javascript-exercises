const fibonacci = function(nthMember) {
    //What is finbonacci?
    //fibonacci numbers = [0,1,1,2,3,5,8,13,21,34 ...]
    //This exercise consider 1 as the first fibonacci number instead of 0.
    //This makes easier to get correct answer since I am going to utilize indicies.
    let initialValues = [0, 1]
    nthMember = Number(nthMember);
    if (nthMember >= 0) {
        for (let i = 0; i < nthMember - 1; i++) {
            initialValues.push(initialValues[i] + initialValues[i + 1]);
        }
    } else {
        return "OOPS"
    }
    return initialValues[nthMember];
};

// Do not edit below this line
module.exports = fibonacci;