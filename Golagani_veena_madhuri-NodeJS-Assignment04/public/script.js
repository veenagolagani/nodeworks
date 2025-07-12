const employeeBody = document.getElementById('employeeBody');
const loader = document.getElementById('loader');

const employees = [1, 2, 3, 4, 5];

function loadEmployees() {
  loader.style.display = 'block';
  Promise.all(employees.map(id =>
    fetch(`http://localhost:3000/api/employees/${id}`)
      .then(res => res.json())
  )).then(data => {
    loader.style.display = 'none';
    data.forEach(emp => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${emp.name}</td><td>${emp.age}</td><td>${emp.mobile}</td><td>${emp.city}</td>`;
      row.onclick = () => showDetails(emp.id);
      employeeBody.appendChild(row);
    });
  });
}

async function showDetails(id) {
  const emp = await fetch(`http://localhost:3000/api/employees/${id}`).then(res => res.json());
  const dept = await fetch(`http://localhost:3000/api/departments/${id}`).then(res => res.json());
  const salary = await fetch(`http://localhost:3000/api/salaries/${id}`).then(res => res.json());

  alert(`Name: ${emp.name}\nAge: ${emp.age}\nCity: ${emp.city}\nMobile: ${emp.mobile}\nDepartment: ${dept.department}\nSalary: ₹${salary.salary}`);
}

loadEmployees();