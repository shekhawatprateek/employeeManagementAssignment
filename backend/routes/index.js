const express = require('express');
const router = express.Router();
const { loadEmployees, saveEmployees } = require('../utils/datahandler');

// Get all employees
router.get('/', (req, res) => {
    res.json(loadEmployees());
});

// Get employee by ID
router.get('/:id', (req, res) => {
    const employees = loadEmployees();
    const employee = employees.find(emp => emp.id === req.params.id);
    if (!employee) return res.status(404).send('Employee not found');
    res.json(employee);
});

// Add new employee
router.post('/', (req, res) => {
    const employees = loadEmployees();
    const newEmployee = { id: Date.now().toString(), ...req.body };
    employees.push(newEmployee);
    saveEmployees(employees);
    res.status(201).json(newEmployee);
});

// Update employee
router.put('/:id', (req, res) => {
    let employees = loadEmployees();
    employees = employees.map(emp => emp.id === req.params.id ? { ...emp, ...req.body } : emp);
    saveEmployees(employees);
    res.json({ message: 'Employee updated' });
});

// Delete employee
router.delete('/:id', (req, res) => {
    let employees = loadEmployees();
    employees = employees.filter(emp => emp.id !== req.params.id);
    saveEmployees(employees);
    res.json({ message: 'Employee deleted' });
});

module.exports = router;