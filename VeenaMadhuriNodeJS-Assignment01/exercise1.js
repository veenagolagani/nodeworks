const fs = require('fs');
const path = require('path');

function getFileContent(file) {
    const filePath = path.join(__dirname, 'lib', file);
    return fs.readFileSync(filePath, 'utf-8');
}

console.log(getFileContent('readme.txt'));
console.log(getFileContent('students.csv'));
console.log(getFileContent('index.html'));