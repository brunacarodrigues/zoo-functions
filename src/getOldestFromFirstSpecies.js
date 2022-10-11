const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstId = employees.find((employer) => employer.id === id)
    .responsibleFor.find((element) => element);

  const { residents } = species.find((specie) => specie.id === firstId);

  const oldAnimal = residents.reduce((acc, elem) => {
    if (elem.age > acc.age) {
      return elem;
    }
    return acc;
  }, residents[0]);

  return [oldAnimal.name, oldAnimal.sex, oldAnimal.age];
}
// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = getOldestFromFirstSpecies;
