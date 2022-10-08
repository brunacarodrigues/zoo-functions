const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animalsResidents = {};
    species.forEach((specie) => { animalsResidents[specie.name] = specie.residents.length; });
    return animalsResidents;
  }
  return (species.find((specie) => specie.name === animal)).residents.length;
}

console.log(countAnimals('lions'));
module.exports = countAnimals;
