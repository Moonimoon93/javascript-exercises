const findTheOldest = function(people) {
    const oldest = people.sort((a,b)=> {
        if(a.yearOfDeath === undefined){
            a.yearOfDeath = (new Date()).getFullYear()
        }else if(b.yearOfDeath === undefined){
            b.yearOfDeath = (new Date()).getFullYear();
        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    })
    console.log(people);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
