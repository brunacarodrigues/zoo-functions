const data = require('../data/zoo_data');

function countAnimals(animal) {
  const totalAnimals = {};
  if (animal === undefined) {
    data.species.forEach((qntAnimals) => {
      totalAnimals[qntAnimals.name] = qntAnimals.residents.length;
    });
    return totalAnimals;
  }

  const nameAnimal = data.species.find((animalName) => animalName.name === animal.specie);
  if (Object.keys(animal).length === 1) {
    return nameAnimal.residents.length;
  }

  const sexAnimal = nameAnimal.residents.filter((animalSex) => animalSex.sex === animal.sex).length;
  return sexAnimal;
}

module.exports = countAnimals;
