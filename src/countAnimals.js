const { species } = require('../data/zoo_data');

const qntAnimals = species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});

const sexAnimalsCount = (animal) => {
  const filterAnimals = species
    .find((specie) => specie.name === animal.specie).residents;
  const animals = filterAnimals
    .reduce((acc, sexo) => ((sexo.sex === animal.sex) ? (acc + 1) : (acc)), 0);
  return animals;
};

function countAnimals(animal) {
  if(animal === undefined) {
    return qntAnimals;
  }
  if (Object.values(animal).length === 1) {
    return sexAnimalsCount;
  }
};

module.exports = countAnimals;
