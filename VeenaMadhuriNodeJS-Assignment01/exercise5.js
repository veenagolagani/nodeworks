const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');
const lines = fs.readFileSync(filePath, 'utf-8').split('\n');

const jsonData = lines.map(line => {
    const [name, age, gender, city] = line.split('|').map(v => v.trim());
    return { name, age: Number(age), gender, city };
});

console.log(JSON.stringify(jsonData, null, 2));