const findTheOldest = function (people) {
  const thisYear = new Date().getFullYear();
  people.sort((x, y) => {
    const xAge = (x.yearOfDeath || thisYear) - x.yearOfBirth;
    const yAge = (y.yearOfDeath || thisYear) - y.yearOfBirth;
    return yAge - xAge;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
