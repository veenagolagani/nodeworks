const employees = [
    { name: "Aghil", age: 20, salary: 50000, department: "development", city: "Hyderabad" },
    { name: "Babu", age: 25, salary: 60000, department: "marketing", city: "Delhi" },
    { name: "Babu", age: 25, salary: 60000, department: "marketing", city: "Pune" },
    { name: "Chaitanya", age: 30, salary: 70000, department: "sales", city: "Mumbai" },
    { name: "Divya", age: 28, salary: 55000, department: "development", city: "Bangalore" },
    { name: "Eesha", age: 22, salary: 48000, department: "hr", city: "Chennai" },
    { name: "Farhan", age: 27, salary: 62000, department: "marketing", city: "Hyderabad" },
    { name: "Gaurav", age: 32, salary: 72000, department: "sales", city: "Delhi" },
    { name: "Harini", age: 29, salary: 53000, department: "development", city: "Pune" },
    { name: "Ishita", age: 24, salary: 49000, department: "hr", city: "Mumbai" },
    { name: "Jatin", age: 31, salary: 71000, department: "sales", city: "Bangalore" },
    { name: "Kritika", age: 26, salary: 59000, department: "development", city: "Chennai" },
    { name: "Lalita", age: 23, salary: 54000, department: "marketing", city: "Hyderabad" },
    { name: "Manan", age: 33, salary: 73000, department: "sales", city: "Delhi" },
    { name: "Neha", age: 21, salary: 47000, department: "hr", city: "Pune" },
    { name: "Omkar", age: 30, salary: 70000, department: "marketing", city: "Mumbai" },
    { name: "Priyanka", age: 28, salary: 56000, department: "development", city: "Bangalore" },
    { name: "Rajesh", age: 22, salary: 50000, department: "hr", city: "Chennai" }
];

function getEmployees() {
    return employees.map(emp => ({ ...emp, tier: emp.salary > 50000 ? 1 : 2 }));
}

function getEmployeesByCity(city) {
    return employees.filter(emp => emp.city.toLowerCase() === city.toLowerCase());
}

function getTotalSalary() {
    return employees.reduce((sum, emp) => sum + emp.salary, 0);
}

function getTotalSalaryOfHyderabad() {
    return employees.filter(emp => emp.city === 'Hyderabad')
                    .reduce((sum, emp) => sum + emp.salary, 0);
}

function getTotalSalaryOfTier1() {
    return getEmployees().filter(emp => emp.tier === 1)
                         .reduce((sum, emp) => sum + emp.salary, 0);
}

const command = process.argv[2];
const argument = process.argv[3];

switch (command) {
    case "getEmployees":
        console.log(getEmployees());
        break;
    case "getEmployeesByCity":
        if (!argument) {
            console.error("Please provide a city name.");
        } else {
            console.log(getEmployeesByCity(argument));
        }
        break;
    case "getTotalSalary":
        console.log(getTotalSalary());
        break;
    case "getTotalSalaryOfHyderabad":
        console.log(getTotalSalaryOfHyderabad());
        break;
    case "getTotalSalaryOfTier1":
        console.log(getTotalSalaryOfTier1());
        break;
    default:
        console.log("Available commands:");
        console.log("  node app.js getEmployees");
        console.log("  node app.js getEmployeesByCity <CityName>");
        console.log("  node app.js getTotalSalary");
        console.log("  node app.js getTotalSalaryOfHyderabad");
        console.log("  node app.js getTotalSalaryOfTier1");
}
