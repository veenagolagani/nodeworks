const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const employees = [
  { id: 1, name: 'Vishnu', age: 29, mobile: '912345678', city: 'Chennai', department: 'HR', salary: 50000 },
  { id: 2, name: 'Rajesh', age: 30, mobile: '9412345678', city: 'Bangalore', department: 'IT', salary: 60000 },
  { id: 3, name: 'Saravanan', age: 31, mobile: '6812345678', city: 'Hyderabad', department: 'Finance', salary: 55000 },
  { id: 4, name: 'Ramesh', age: 32, mobile: '9781234561', city: 'Mumbai', department: 'Marketing', salary: 52000 },
  { id: 5, name: 'John', age: 33, mobile: '9456781234', city: 'Delhi', department: 'Engineering', salary: 62000 }
];

app.get('/api/employees/:id', (req, res) => {
  const emp = employees.find(e => e.id == req.params.id);
  if (emp) res.json({ id: emp.id, name: emp.name, age: emp.age, mobile: emp.mobile, city: emp.city });
  else res.status(404).send('Employee not found');
});

app.get('/api/salaries/:id', (req, res) => {
  const emp = employees.find(e => e.id == req.params.id);
  if (emp) res.json({ id: emp.id, salary: emp.salary });
  else res.status(404).send('Salary not found');
});

app.get('/api/departments/:id', (req, res) => {
  const emp = employees.find(e => e.id == req.params.id);
  if (emp) res.json({ id: emp.id, department: emp.department });
  else res.status(404).send('Department not found');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));