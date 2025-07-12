const fs = require('fs');
const path = require('path');

function copyFile(fileName, newFile) {
    const src = path.join(__dirname, fileName);
    const dest = path.join(__dirname, newFile);
    fs.copyFileSync(src, dest);
    console.log(`${fileName} copied to ${newFile}`);
}

copyFile('random-wrods.txt', 'copy-of-random-wrods.txt');