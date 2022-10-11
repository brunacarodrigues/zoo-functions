const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function employee(person) {
  return employees.find((employee01) => employee01.firstName === person.name
  || employee01.lastName === person.name || employee01.id === person.id);
}

function specie(person) {
  return species.filter((specie01) => {
    if (!person) {
      throw new Error('Informações inválidas');
    }
    return person.responsibleFor.includes(specie01.id);
  });
}

function employeesAll() {
  return employees.map((employee02) => {
    const arraySpecies = specie(employee02);
    return {
      id: employee02.id,
      fullName: `${employee02.firstName} ${employee02.lastName}`,
      species: arraySpecies.map((element) => element.name),
      locations: arraySpecies.map((element) => element.location),
    };
  });
}

function getEmployeesCoverage(person) {
  if (!person) {
    return employeesAll();
  }

  const employeeObject = employee(person);
  const arraySpecies = specie(employeeObject);

  return {
    id: employeeObject.id,
    fullName: `${employeeObject.firstName} ${employeeObject.lastName}`,
    species: arraySpecies.map((element) => element.name),
    locations: arraySpecies.map((element) => element.location),
  };
}

module.exports = getEmployeesCoverage;
