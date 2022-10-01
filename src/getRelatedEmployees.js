const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employ) => employ.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const nameManager = [];
  const employs = data.employees.filter((name) => name.managers.includes(managerId));
  employs.forEach((manager) => {
    const fullName = `${manager.firstName} ${manager.lastName}`;
    nameManager.push(fullName);
  });
  return nameManager;
}

module.exports = { isManager, getRelatedEmployees };
