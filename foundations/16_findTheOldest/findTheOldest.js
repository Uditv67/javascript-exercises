const getAge = function(people) {
    const endYear = people.yearOfDeath || new Date().getFullYear();
    return endYear - people.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        return getAge(current) > getAge(oldest) ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
