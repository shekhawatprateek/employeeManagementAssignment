const fs = require('fs');
const DATA_FILE = 'employees.json';

const loadEmployees = () => {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
};

const saveEmployees = (employees) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(employees, null, 2));
};

module.exports = { loadEmployees, saveEmployees };
