const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  return ids.map((id) => species.find((specie) => id === specie.id));
}

module.exports = getSpeciesByIds;
