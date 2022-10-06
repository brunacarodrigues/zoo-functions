const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data
    .find((species) => species.name === animal)
    .residents.every((animAge) => animAge.age >= age);
}

module.exports = getAnimalsOlderThan;
