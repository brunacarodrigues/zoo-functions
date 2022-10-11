const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((person) => person.age < 18).length;
  const adult = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senior = entrants.filter((person) => person.age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const qntdVisits = countEntrants(entrants);
  const qntdChilds = qntdVisits.child * data.prices.child;
  const qntdAdults = qntdVisits.adult * data.prices.adult;
  const qntdSeniors = qntdVisits.senior * data.prices.senior;
  return qntdChilds + qntdAdults + qntdSeniors;
}

module.exports = { calculateEntry, countEntrants };
